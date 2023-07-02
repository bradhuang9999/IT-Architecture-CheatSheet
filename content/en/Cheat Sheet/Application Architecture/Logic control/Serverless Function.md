---
title: "Serverless Function"
date: 2023-07-01
weight: 3
---

### **Overview:**

Serverless Function is a design pattern that allows software developers to focus solely on implementing program logic without having to worry about the programming platform or system management issues.

### **Use Cases:**

- Web API
- Batch processing
- Scheduled tasks
- Event-driven operations
- Backend server for frontend-backend separation

### **Advantages:**

- Flexibility: Pay only when used
- Scalability: Cloud platforms automatically scale based on usage
- No infrastructure management: Unlike IaaS or FaaS models, there is no need to manage the underlying infrastructure or platform configuration.
- Implement logic in general-purpose languages: If the service usage increases in the future, the same logic can be adjusted and moved to environments such as containers.

### **Disadvantages:**

- Loading time: Each service execution requires loading the logic, resulting in slower response times. While some platforms offer pre-loading options, they come at a higher cost.
- Since most FaaS services are cloud-based on external networks, compared to services on internal networks, additional security considerations need to be taken into account.