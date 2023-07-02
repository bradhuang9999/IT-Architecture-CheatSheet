---
title: "Hot backup"
weight: 3
---

### **Description**

Hot backup refers to the real-time synchronization of data to another backup server. When the primary server fails, the backup server stops receiving synchronized data, becomes the primary server, and modifies other service configurations to connect to this backup server.

### **Use Cases**

- Desire to reduce RPO (Recovery Point Objective) and RTO (Recovery Time Objective) without overly complex architecture and with reasonable backup costs.

### **Advantages**

- Lower RPO: Since data is typically synchronized in milliseconds or seconds, less data is lost under normal circumstances.
- Lower RTO: Because the backup data is already loaded into the backup server, service can be quickly started by making configuration modifications. Automatic switching can even be performed through fault detection modes.
- Simple architecture: There is no need to consider data synchronization in a multi-site architecture.
- Lower cost: Only an additional backup server is required. In cloud architecture, fewer system resources can be used during normal operation. When switching to the primary server, more system resources can be obtained through vertical scaling. The pay-as-you-go nature of the cloud can help reduce costs.

### **Disadvantages**

- Higher cost: Another backup server needs to be kept ready for activation at all times. If automatic fault detection and switching are required, additional equipment and management costs may be incurred.
- RPO still exists: Since it takes time to transfer services to the backup server, there is still a certain amount of RPO.

### **Examples**

- Real-time replication of a database to a backup database.