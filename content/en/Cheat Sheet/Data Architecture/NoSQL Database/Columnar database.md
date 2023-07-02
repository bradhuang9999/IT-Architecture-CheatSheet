---
title: "Columnar database"
weight: 2
---

### Description

Columnar database stores data in columns, allowing for quick retrieval of specific columns for analysis. For example, in sales data with multiple detail columns, such as product ID and sales amount, these columns are stored separately. To retrieve the sales amount for a specific product, one only needs to scan the product ID column and find the corresponding row index. Then, using that row index, the corresponding value in the sales amount column can be filtered to obtain the sales amount for that product. Since unused columns are stored separately, data retrieval is faster compared to traditional row-based databases.

### Use Cases

- Real-time big data analytics systems.

### Advantages

- Fast aggregation of specific columns: With separate storage for each column, it allows for quick retrieval of aggregated data for each column.
- Fast writes: Compared to traditional OLAP databases, data can be stored in real-time across different columns, fulfilling the requirements of real-time big data analytics.
- Easy horizontal scalability: Since data is stored separately for each column, it can be stored on different servers, improving availability.

### Disadvantages

- Efficiency may be lower when aggregating multiple columns compared to traditional row-based databases.

### Examples

- Apache Cassandra
- Amazon Redshift
- Google BigQuery
- Vertica
- Apache Parquet