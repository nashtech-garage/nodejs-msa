output "vcn_id" {
  value = module.vcn.vcn_id
}

output "public_subnet_id" {
  value = oci_core_subnet.vcn_pubsubn.id
}
