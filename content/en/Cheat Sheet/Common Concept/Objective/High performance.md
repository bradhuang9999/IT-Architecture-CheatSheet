---
title: "High performance"
weight: 1
---

### **Description**

Efficiency is one of the objectives in architectural design. An efficient architecture can enhance user satisfaction, generate more revenue, and enable businesses to respond quickly to external changes.

Possible approaches include:

1. Choosing the right tools based on understanding the system's characteristics. Each tool is designed for specific situations, and selecting the correct tool can significantly increase system efficiency. For example, if it is known that the system needs real-time statistics of product sales on a website, using a columnar database in high-volume sales scenarios is often more efficient than traditional relational databases.
2. Performing computations at the appropriate location and time. For instance, avoiding large-scale computations on the user's device or the website server, as browsers typically have limited system resources and website servers need to serve a large number of users. Instead, performing extensive computations through Stream Data Pipelines for analysis or using batch processing in batch programs.
3. Horizontal auto-scaling: Automatically scaling the number of servers based on system load to accommodate increased resource demands.
4. Optimizing computational logic: Designing suitable algorithms based on understanding the computational requirements, which can significantly reduce redundant computations and improve system performance.
5. Caching computation results: Caching time-consuming or network-dependent computation results. By retrieving results from server-side or cache servers, redundant computations and unnecessary network requests can be avoided.