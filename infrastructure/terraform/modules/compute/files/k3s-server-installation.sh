#!/bin/bash

echo "Install dependencies and fix some bugs"
# Disable firewall 
/usr/sbin/netfilter-persistent stop
/usr/sbin/netfilter-persistent flush

systemctl stop netfilter-persistent.service
systemctl disable netfilter-persistent.service
# END Disable firewall

apt-get update
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
DEBIAN_FRONTEND=noninteractive apt-get autoremove -y
DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y software-properties-common jq
# DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
# DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y  python3 python3-pip
# pip install oci-cli

# Fix /var/log/journal dir size
echo "SystemMaxUse=100M" >> /etc/systemd/journald.conf
echo "SystemMaxFileSize=100M" >> /etc/systemd/journald.conf
systemctl restart systemd-journald

echo "Installing k3s"

curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest INSTALL_K3S_EXEC="server --token=${k3s_token} --cluster-init --disable traefik" sh -s -

k3s kubectl wait --for=condition=ready pods --all -n kube-system --timeout=-1s 2> /dev/null
