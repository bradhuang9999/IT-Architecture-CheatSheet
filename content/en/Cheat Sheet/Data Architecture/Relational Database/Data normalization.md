---
title: "Data normalization"
weight: 1
---

### **Description**

Data normalization is a method of storing data in multiple separate tables based on their logical relationships to avoid storing redundant data across multiple tables.

### **Use Cases**

Data normalization is commonly used in situations where the data attributes are complex and cannot be fully stored in a single table.

### **Advantages**

- Reduced data storage: Normalization reduces the storage of redundant data fields, effectively reducing storage space requirements.
- Increased flexibility and scalability of tables: Splitting data into multiple tables makes it easy to adjust and expand fields according to requirements.
- Reduced risk of data inconsistency: When data changes occur, modifications only need to be made in the corresponding locations, avoiding the risk of inconsistency caused by multiple modifications.

### **Disadvantages**

- Complexity: Data normalization involves managing multiple tables, which is more complex compared to a single table in terms of operations.
- Increased development cost: Developing appropriate data manipulation interfaces to handle multiple tables increases development time and cost.
- Longer query time: To retrieve complete data, multiple tables need to be linked. If proper indexing is not established, it may lead to increased query time. Establishing appropriate indexes can improve query performance.