output "vcn_id" {
  value = module.vcn.vcn_id
  public_subnet_id = oci_core_subnet.vcn_pubsubn.id
}
