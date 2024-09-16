resource "random_password" "k3s_token" {
  length  = 55
  special = false
}

data "cloudinit_config" "k3s_server_cloudinit" {
  gzip          = true
  base64_encode = true

  part {
    content_type = "text/x-shellscript"
    content = templatefile("${path.module}/files/k3s-server-installation.sh", {
      k3s_token = random_password.k3s_token.result,
    })
  }
}

# Source from https://registry.terraform.io/providers/oracle/oci/latest/docs/resources/core_instance

resource "oci_core_instance" "free1GB_ins" {
  for_each = toset(["master"]) # , "worker1"

  # Required
  availability_domain = var.availability_domain
  compartment_id      = var.compartment_id
  shape               = "VM.Standard.E2.1.Micro"

  # Optional
  agent_config {

    # Optional
    are_all_plugins_disabled = true
  }

  create_vnic_details {

    # Optional
    hostname_label   = "nodemsa-${each.key}"
    assign_public_ip = true
    subnet_id        = var.subnet_id

    freeform_tags = var.freeform_tags
    defined_tags  = var.defined_tags
  }
  display_name = "[NodeJs MSA] ${each.key}"

  # shape_config {

  #   # Optional
  #   memory_in_gbs             = 1
  #   ocpus                     = 1
  # }
  source_details {
    # Required
    # Ubuntu 22.04
    source_id   = "ocid1.image.oc1.phx.aaaaaaaa2eyu6rshjx4zrnwcrvsfv66cwfdwycfzcgui2ai6vmhcabpzz4gq"
    source_type = "image"

    # Optional
    boot_volume_size_in_gbs = 50
  }

  metadata = {
    ssh_authorized_keys = var.public_key_path != null ? file(var.public_key_path) : var.public_key
    user_data           = data.cloudinit_config.k3s_server_cloudinit.rendered
  }

  preserve_boot_volume = false

  freeform_tags = var.freeform_tags
  defined_tags  = var.defined_tags

  lifecycle {
    ignore_changes = [defined_tags, freeform_tags]
  }
}
