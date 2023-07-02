---
title: "Sharding"
weight: 4
---

### **Description**

Sharding is a method of dividing a large database table into multiple smaller shards based on criteria such as time, letters, numbers, or hash values. Each shard is then stored on a different server using the designated shard key.

### **Use Cases**

- When a single database table becomes excessively large and there is a clear and available shard key.

### **Advantages**

- Distributed server load: By distributing data across multiple databases, it avoids having critical tables (e.g., product information) concentrated on specific servers, which could result in excessive system demands.
- Horizontal scalability: By distributing data across multiple servers according to demand, it improves database operation speed and increases user satisfaction.
- High availability: By dispersing the database across multiple servers, it reduces the risk of a single point of failure.

### **Disadvantages**

- Careful design of shard key required: In certain cases, certain shard keys may result in an uneven distribution of data, such as tweets from popular celebrities. Analyzing data distribution in advance can help in designing appropriate shard keys.
- Increased complexity of joining data tables: When performing join operations that span multiple servers, query speed can be affected and become slower.
- Increased complexity of server management: Considerations such as data consistency, server failure recovery, and higher setup costs need to be taken into account.