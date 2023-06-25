---
title: "Vertical scaling"
date: 2023-06-10
weight: 2
---

### **Description**

When a server has high system resource demands (e.g., CPU, memory, disk space), if it is a physical machine, the solution is to upgrade the memory or disk space directly. If it is a virtual machine, the allocation of more system resources to the VM can be dynamically adjusted.

### **Advantages**

- Simplicity: By increasing the system resources of a single server, it can handle increased system demands.

### **Disadvantages**

- Downtime: If it is a physical machine, installing new hardware is required. If it is a virtual machine, a reboot may be necessary.
- Limited scalability: Vertical scaling is still limited by the hardware constraints of a single server. When system demands exceed these limitations, it is not possible to provide additional system resources.