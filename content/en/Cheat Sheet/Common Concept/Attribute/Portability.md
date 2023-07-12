---
title: "Portability"
weight: 5
---

### **Description**

When developing applications, portability should be considered because the same business logic may need to be executed in different environments in the future. For example, the logic that was originally executed on a web backend server may later need to be executed in batch or scheduled jobs. Having high application portability reduces the amount of modifications required when migrating to a new environment.

### **Common Practices**

- Use programming languages that are executable in multiple environments, such as Java or Golang: These languages have cross-platform capabilities, allowing the application to run on different operating systems and environments, thus increasing its portability.
- Separate interfaces that interact with external systems into interchangeable components: This approach minimizes dependencies on external systems. When transitioning to a new environment or replacing an external system, only the implementation of the interface needs to be replaced, avoiding extensive code modifications.
- Modularize the code to avoid high coupling, which makes it difficult to adjust the architecture: Modularized programming divides the functionality into independent modules, reducing dependencies between modules. This enables individual modules to be adjusted and replaced independently, enhancing portability.