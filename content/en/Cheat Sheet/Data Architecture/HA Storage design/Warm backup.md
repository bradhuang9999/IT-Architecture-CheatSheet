---
title: "Warm backup"
weight: 2
---

### Description

Warm backup involves setting up a dedicated standby server that is already installed with relevant services and regularly updated. It also loads the latest backup data. Under normal circumstances, the standby server is not operational, and the system does not read from or modify it. Only when the primary server fails, the standby server is activated and the differential data is loaded to provide system services. The RTO (Recovery Time Objective) for warm backup typically ranges from a few hours to a few days.

### Use Cases

Warm backup is suitable for small-scale internal systems that aim to recover services within a few hours.

### Advantages

- Lower RPO: Since the standby server regularly loads the latest backup data, less data is lost in the event of a failure.
- Lower RTO: Because the backup data is already loaded into the standby server, service can be quickly started by making configuration modifications. Additionally, RTO time can be further reduced through automatic failover modes such as fault detection.
- Simple architecture: There is no need to consider data synchronization in a multi-site architecture, reducing architectural complexity.
- Lower cost: Only an additional standby server is required. In cloud architecture, fewer system resources can be used during normal operation. When switching to the standby server, more system resources can be obtained through vertical scaling. With the pay-as-you-go model offered by the cloud, costs can be effectively controlled.

### Disadvantages

- RPO still exists: Since the data is backed up periodically, there may still be a time gap between the latest backup and the occurrence of a failure.
- Higher cost: An additional standby server is required, along with the cost of keeping the standby server ready for activation. If automatic fault detection and failover are required, additional costs may be incurred.