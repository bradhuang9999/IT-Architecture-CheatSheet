---
title: "Dependency inversion principle"
weight: 4
---

### **Description**

The Dependency Inversion Principle (DIP) states that when designing components, it is important to avoid directly instantiating objects with different implementation details within the component to handle different calling requirements. Instead, the component should depend on abstractions by specifying the interfaces that can be passed in from external sources. This approach helps reduce coupling between code components.

There are two specific ways to implement the Dependency Inversion Principle:

1. Dependency Injection: Components specify interfaces to be injected during design. When using the component, the functionality is dynamically determined by the injected interface implementation.
2. Dependency Lookup: Utilizing container management mechanisms like Spring, the container can dynamically provide the required concrete implementations of classes when needed.