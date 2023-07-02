---
title: "Document database"
weight: 1
---

### Description

Document database is a form of NoSQL database that stores data in a non-normalized manner using individual documents. There are various types of document databases available in the market, each with its own advantages and disadvantages based on their design goals and characteristics.

### Use Cases

- Providing a high-performance and highly available data storage solution for high-load websites.
- Storing large volumes of data collected by web crawlers.
- Performing big data aggregation and analysis.
- Developing search engines and full-text search applications.

### Advantages

- No predefined data schema: Unlike traditional SQL databases, document databases allow flexible data storage, enabling complex document structures to be stored in a tree-like format.
- Consistency control: Document databases offer multiple consistency options, allowing the choice of an appropriate consistency level to improve write efficiency, even if data inconsistencies exist across different regions in the short term.
- Fast writes: Document databases can achieve fast write operations by allowing lower levels of consistency.
- Easy horizontal scalability: Many document databases are designed with clustering, consistency control, and container-based architectures, making them easy to scale horizontally.

### Disadvantages

- Difficulty handling complex relational queries: Document databases are less efficient than traditional relational databases when it comes to handling complex cross-document queries.
- Higher storage space requirements: The denormalized nature of document databases may result in redundant storage, requiring more storage space.
- Weaker transaction control: Document databases have weaker transaction control capabilities compared to traditional databases with ACID properties.
- Learning specialized syntax: Different document database products have their own query and data manipulation syntax, requiring the learning of specific syntax and techniques.
- Lower precision in financial calculations: Some document database products sacrifice precision in financial calculations for faster aggregation of data summaries.

### Examples

- MongoDB
- Couchbase
- Elasticsearch