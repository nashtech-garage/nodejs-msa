locals {
  freeform_tags = {
    "provisioner" = "terraform"
    "environment"     = "${var.environment}"
  }
}
