---
title: "Low coupling"
weight: 4
---

### **Description**

The low coupling of a system refers to the low degree of interdependence between modules. In large-scale systems, the system is often divided into multiple modules based on their functionality, such as an order module and a user information module. Although these modules may need to collaborate with each other, it is important to minimize direct dependencies between modules for better management. This helps prevent excessive coupling, making it easier to make changes to individual modules without causing significant impacts on others.

### **Different types of coupling ranked from low to high:**

- Content coupling: Directly accessing another module's internal data, such as using variables or directly reading another module's data tables.
- External coupling: Both modules read and write to a global data location.
- Control coupling: Providing an interface to the other module, allowing Module B to control Module A through this interface while encapsulating its own data and processes.
- Message coupling: Providing an external messaging interface for invocation, such as calling through a Web API.

### **Possible approaches:**

- Decoupling data access: Decouple data access and process control from internal data and specific databases to improve system flexibility.
- Dependency inversion: When high-level modules use components, they only need to specify the interface to be returned, rather than the specific class, to reduce coupling between modules.
- Event-driven: Use events or message passing for module-to-module communication, and even employ asynchronous event handling mechanisms to further reduce coupling.