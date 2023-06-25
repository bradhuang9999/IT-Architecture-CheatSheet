---
title: "Horizontal scaling"
date: 2023-06-25
weight: 3
---

### **Description**

Horizontal scaling is a system resource management strategy that effectively utilizes system resources and improves system performance by increasing or decreasing the number of servers or containers when the system's resource demands dynamically increase or decrease. This can be achieved through automated scheduling based on traffic predictions or automatic scaling triggered by system load detection.

### **Advantages**

- Optimized resource utilization: When system resource utilization is low, the number of servers can be dynamically reduced to save costs.
- Avoidance of single point of failure: Multiple servers or containers working together with load balancing and monitoring mechanisms can prevent single points of failure and enhance system availability.
- No service interruption: Horizontal scaling typically occurs during runtime by adding more servers or containers to handle high traffic demands without the need for downtime or service interruption.

### **Disadvantages**

- Complex architecture: It requires consideration of how to monitor and manage the number and status of servers or containers.
- Not suitable for all systems: Horizontal scaling may require redesigning the system to ensure that all components can adapt to a dynamically changing environment.
- Network and communication costs: Since the system consists of multiple servers or containers, additional communication overhead and coordination costs are involved.

### **Examples**

- Container environments: Container environments like Kubernetes, Docker, and others provide flexible scaling capabilities to automatically adjust the number of containers based on demand.
- Distributed databases: In distributed databases, the number of nodes can be adjusted based on workload and data volume changes to provide better performance and reliability.
- Distributed storage: Storing data across multiple nodes allows for scaling based on data volume and storage requirements, ensuring efficient data access and capacity management.