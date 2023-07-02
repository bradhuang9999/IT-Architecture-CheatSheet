---
title: "DB Procedure"
date: 2023-07-01
weight: 5
---

DB Procedure is a program stored in a database, usually based on SQL, combined with variables, logical conditions, and loops to efficiently process data in the database.

### **Advantages:**

- Allows for complex data processing on the database side, effectively handling large amounts of data and avoiding issues with network latency and data transmission.
- Enables convenient transaction management on the database side.

### **Disadvantages:**

- Difficult to debug and develop: Setting breakpoints, logging program execution, and having code suggestions in the editor are challenging.
- Limited use of modern programming concepts, such as object-oriented programming, due to the procedural nature.
- High coupling: The programs reside within the database, resulting in high coupling between programs and between programs and database tables.
- Difficult program updates: Updating DB Procedures and related database tables can lead to errors in associated objects. Achieving zero downtime for program updates is challenging.
- Programs are tightly bound to a specific database and migrating to other database products is difficult.

### **Examples:**

- PL/SQL: DB Procedure in Oracle Database.
- T-SQL: DB Procedure in SQL Server Database.