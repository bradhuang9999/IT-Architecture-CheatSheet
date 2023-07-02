---
title: "Key-Value Database"
weight: 4
---

### Description

Key-Value Database stores data using keys as the index for data retrieval, without requiring a predefined data format for each record. Since each data record is independent, Key-Value Databases can efficiently store a massive amount of data while horizontally scaling.

### Use Cases

- Data caching: Key-Value Databases can be used to cache data, allowing for quick access to recent data.
- Stateless servers: Moving user session states from web servers to Key-Value Databases enables horizontal scalability and server replacement without losing user data, increasing website availability.
- Shopping cart data: Storing user shopping cart data in a Key-Value Database can alleviate the burden on relational databases during peak periods and prevent data loss due to a high volume of service requests.

### Advantages

- Flexible data storage format: Each data record is stored independently without requiring a predefined format.
- Fast data retrieval: With the knowledge of the key, data can be quickly accessed.
- Horizontal scalability: The independent nature of each key-value pair makes horizontal scaling easier.

### Disadvantages

- Limited computational operations across keys: Key-Value Databases primarily support simple aggregation calculations based on keys. For complex aggregation calculations, other types of databases are recommended.
- Limited referencing of other data sources: Key-Value Databases lack the ability to enforce data constraints and references using primary keys, foreign keys, and joins.
- Data persistence limitations: Some Key-Value Databases store data in memory rather than providing permanent storage.

### Examples

- Redis
- Amazon DynamoDB
- Apache Cassandra