---
title: "Multi-site"
weight: 4
---

### Description

Multi-site is a design pattern for achieving high data availability, where multiple servers synchronize data with each other and provide system services. When any server fails, the service on that server is automatically stopped, and other servers take over to support system demands. There are various modes to achieve a multi-site architecture, such as using a primary server for data writes and a backup server for data reads, or employing a server cluster to coordinate multiple servers for service provision.

### Use Cases

- Enterprises seeking to provide a highly available architecture.

### Advantages

- Minimal RPO and RTO: With real-time synchronization and automatic failover, high availability can be achieved.
- System responsiveness: Having multiple servers serving requests reduces the workload on individual servers, enhancing user satisfaction.

### Disadvantages

- Higher cost: Maintaining multiple servers simultaneously increases the system's overall cost.
- Complexity in architecture: Coordinating data synchronization and automatic switching mechanisms among multiple servers adds complexity to the architecture.

### Examples

- An enterprise implements a multi-site architecture with a primary server and a backup server to provide high availability for data read and write services.