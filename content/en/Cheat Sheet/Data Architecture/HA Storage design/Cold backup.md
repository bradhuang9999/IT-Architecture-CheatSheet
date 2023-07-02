---
title: "Cold backup"
weight: 1
---

### Description

Cold backup refers to the periodic generation of data backups in another location for the purpose of system restoration in the event of system or hardware failures.

### Use Cases

- Personal or small-scale systems
- Tolerable longer RPO (Recovery Point Objective, the acceptable data loss interval in the event of system failure)
- Tolerable longer RTO (Recovery Time Objective, the time required for system recovery)

### Advantages

- Simple architecture: Only requires setting up scheduled backups and storing them in another location.
- Cost-effective: Does not require additional server activation, resulting in lower costs.

### Disadvantages

- Longer RPO: Since cold backups are typically generated at longer intervals (e.g., once a day), there may be a longer data loss window in the event of a system failure.
- Longer RTO: Due to the need to load backup data and perform connection setup during system recovery, cold backups require a longer system recovery time.