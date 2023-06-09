# Source from https://registry.terraform.io/providers/oracle/oci/latest/docs/data-sources/identity_availability_domains

# Tenancy is the root or parent to all compartments.
# For this tutorial, use the value of <tenancy-ocid> for the compartment OCID.

data "oci_identity_availability_domains" "ads" {
  compartment_id = var.oci_compartment_id
}

module "network" {
  compartment_id = var.oci_compartment_id
  freeform_tags  = locals.freeform_tags
}

module "compute" {
  compartment_id      = var.oci_compartment_id
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[0].name
  subnet_id           = module.network.public_subnet_id
  public_key          = file(var.oci_public_key_filepath)
  freeform_tags       = locals.freeform_tags
}
