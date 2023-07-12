---
title: "Interface Segregation Principle"
weight: 2
---

### **Description**

In order to improve code readability and maintainability, a class should not be forced to implement unnecessary methods. Therefore, when certain functionalities of an interface are not needed in certain situations, the interface should be split into multiple sub-interfaces.

### **Example**

For example, let's consider an interface called "DataManager" that is responsible for data querying and modification. If there are cases where only the querying functionality is needed, the "DataManager" interface should be split into two sub-interfaces: "DataReader" and "DataModifier". This allows each sub-interface to be independently implemented based on specific requirements, enhancing flexibility and scalability.