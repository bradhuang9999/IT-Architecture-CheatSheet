---
title: "DB Trigger"
date: 2023-07-01
weight: 7
---

### **Description**

DB Trigger is a program on the database side, and its syntax varies depending on the type of database, such as PL/SQL or T-SQL. Its purpose is to monitor changes in specific table data and execute specific logic when data is inserted, updated, or deleted.

### **Use Cases**

- Logging data modifications.
- Updating related tables in response to changes.
- Synchronizing deletion of data in associated tables.

### **Advantages**

- Allows implementation of event-driven logic on the database side: predefined logic automatically executes when events occur.

### **Disadvantages**

- Overuse can decrease database performance.
- Care must be taken to prevent infinite triggering loops between different triggers on different tables.