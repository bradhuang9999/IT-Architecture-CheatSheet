---
title: "Switch"
weight: 2
---

### Description

A switch, similar to a hub, allows multiple devices in a local area network to communicate with each other by transmitting packets. However, a switch differs from a hub in that it records the MAC addresses of devices connected to its ports in an internal MAC table, enabling precise packet forwarding to the intended destination device.

### Features

- Packet forwarding: Utilizes the MAC table to accurately deliver packets to the target device.
- Broadcast MAC address lookup: If an unknown MAC address is encountered, the switch broadcasts to find the corresponding device.
- MAC table maintenance: Updates the MAC table when a device is found, a MAC address changes, or a port is closed.
- Provides interface for configuration: Offers interfaces for administrators to manually adjust the MAC table or configure subnet-to-port mappings.

### Use Cases

- Required in a local area network where multiple devices need to communicate with each other.

### Advantages

- Reduced network traffic: Precise packet forwarding using the MAC table results in lower packet volume, reducing overall network traffic.
- Supports multiple device connections: Without packet collisions, the switch can facilitate simultaneous data exchange among multiple devices.
- Enhanced security: Prevents packet delivery to unintended recipients, reducing the risk of eavesdropping.

### Disadvantages

- Higher cost: Switches are more expensive compared to hubs due to their complex structure.
- Complexity in usage: Managing network segmentation and the MAC table requires understanding of specific requirements.
- Single point of failure: If a single switch in the network fails, it can cause connectivity issues for the devices connected to it. This can be mitigated by implementing load balancing or redundancy measures.