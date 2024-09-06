module "vcn" {
  source  = "oracle-terraform-modules/vcn/oci"
  version = "3.5.4"

  # Required Inputs
  compartment_id = var.compartment_id

  # Optional Inputs
  vcn_name      = "[NodeJs MSA] VCN"
  vcn_dns_label = "nodemsa"
  vcn_cidrs     = ["10.0.0.0/16"]

  create_internet_gateway = false
  create_nat_gateway      = false
  create_service_gateway  = false

  lockdown_default_seclist = false

  freeform_tags = var.freeform_tags
  defined_tags = var.defined_tags
}

resource "oci_core_internet_gateway" "ig" {
  compartment_id = var.compartment_id
  display_name   = "[NodeJs MSA] Internet Gateway"

  vcn_id = module.vcn.vcn_id

  freeform_tags = var.freeform_tags
  defined_tags = var.defined_tags

  lifecycle {
    ignore_changes = [defined_tags, freeform_tags]
  }
}

resource "oci_core_default_route_table" "default_route_table" {
  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id = oci_core_internet_gateway.ig.id
    description       = "Terraformed"
  }

  manage_default_resource_id = module.vcn.vcn_all_attributes.default_route_table_id
}

# Source from https://registry.terraform.io/providers/oracle/oci/latest/docs/resources/core_subnet

resource "oci_core_subnet" "vcn_pubsubn" {

  # Required
  compartment_id = var.compartment_id
  vcn_id         = module.vcn.vcn_id
  cidr_block     = "10.0.0.0/24"

  # Optional
  display_name               = "pubsubn"
  dns_label                  = "pubsubn"
  prohibit_public_ip_on_vnic = false
  dhcp_options_id            = module.vcn.vcn_all_attributes.default_dhcp_options_id
  route_table_id             = module.vcn.vcn_all_attributes.default_route_table_id
  security_list_ids          = [module.vcn.vcn_all_attributes.default_security_list_id]

  freeform_tags = var.freeform_tags
  defined_tags = var.defined_tags

  lifecycle {
    ignore_changes = [defined_tags, dns_label, freeform_tags]
  }
}