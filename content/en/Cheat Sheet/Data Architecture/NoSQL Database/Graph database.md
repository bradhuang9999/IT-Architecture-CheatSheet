---
title: "Graph database"
weight: 3
---

### Description

Graph database is specifically designed to record the relationships between a large amount of data. The data is represented as nodes, and the relationships between nodes are represented as edges. By defining the start point, end point, direction, and properties of edges, a graph database can quickly find relevant nodes based on a specific node, even when dealing with a large number of edges. To improve query speed, indexes are commonly created for frequently used edges.

### Use Cases

- Social networking websites: Utilizing friend relationships as edges to recommend friends of friends. Using shared interests as edges to recommend users with similar hobbies.
- Recommendation engines: Finding related recommended products or videos based on browsing history, purchase records, user preferences, and other relationships.
- Fraud detection: Identifying potential fraud risks by analyzing transaction information such as payment recipients, addresses, and phone numbers.

### Advantages

- Fast querying of relationships between objects: Even with millions of relationship data, a graph database can perform queries quickly.
- Flexible data model: It allows for the customization of various forms of nodes and edges based on business requirements.
- Built-in graph algorithms: Graph databases typically come with various built-in graph algorithms, enabling users to execute algorithmic queries related to relationship data easily.
- Easy horizontal scalability: Graph databases are designed to handle the demands of billions of relationship data commonly found in large-scale websites. They can be easily scaled across multiple servers to meet the needs of high-volume relationship operations.

### Disadvantages

- Highly specialized: Graph databases focus on storing and querying the relationships between objects. If detailed information about related objects (such as product details) is required, it often needs to be combined with other databases.
- Requires significant storage space: Due to the often complex relationships between nodes and the need for indexes to improve query performance, more storage space is required.
- High learning curve: The query language and data model of graph databases differ from traditional SQL, requiring additional time and effort to learn.

### Examples

- Amazon Neptune
- ArangoDB
- JanusGraph
- Neo4j
- OrientDB
- TigerGraph