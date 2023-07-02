---
title: "NAT"
weight: 2
---

### Description

NAT (Network Address Translation) is a technique performed on the firewall, router, or dedicated NAT server in an edge network to translate packets between internal and external devices. It converts internal IP addresses into one or more public IP addresses to prevent external malicious entities from identifying the list of devices in the internal network through IP addresses. When a response is received, NAT determines which internal device to send the response to based on information such as the requested URL or port.

### Advantages

- Enhanced security for internal networks: NAT masks the internal IP addresses at the edge network, making it impossible for external devices to identify the list of devices in the internal network or directly call internal devices through IP addresses.
- Conservation of public IP addresses: NAT allows a large number of internal devices to connect to the internet using a small pool of public IP addresses, reducing the required number of public IP addresses and associated costs.

### Disadvantages

- Increased complexity of network architecture: All packets connecting to the external network need to pass through NAT for forwarding and translation, which adds complexity to the network architecture.
- Impact on network speed: Since all packets connecting to the external network must go through NAT, having only one NAT server may potentially reduce the connection speed to the external network. This issue can be mitigated by horizontally scaling multiple NAT servers.