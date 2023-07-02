---
title: "Data denormalization"
weight: 2
---

### **Description**

When data processing flows and attributes become extremely complex, excessive normalization can lead to overly complicated data processing, increasing development costs and maintenance complexity. Therefore, in some cases, it may be considered to reduce the level of normalization in order to simplify the data processing flow.

### **Use Cases**

- When the data processing flow and fields are highly complex and there is a desire to reduce development complexity.

### **Advantages**

- Improved query speed: By denormalizing the data and storing it together, the need to join multiple tables is reduced, resulting in faster query speed.
- Controlled development complexity: Appropriate denormalization can reduce the number of interfaces and interfaces required for development, simplifying the development process.

### **Disadvantages**

- Increased storage space: Due to the presence of redundant data, more storage space is required.
- Increased complexity and time for data modification: As modifications need to be made in multiple locations where the same data is stored, the complexity and time required for modifying data increase.