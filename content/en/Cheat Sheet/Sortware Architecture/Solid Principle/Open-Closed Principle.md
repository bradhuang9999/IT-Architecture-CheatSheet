---
title: "Open-Closed Principle"
weight: 5
---

### **Description**

The Open-Closed Principle (OCP) states that software entities should be open for extension but closed for modification. To achieve this principle, various approaches can be used, such as inheritance, polymorphism, or design patterns.

Specifically, there are several common ways to adhere to the Open-Closed Principle:

1. Inheritance: Subclasses can inherit the existing functionality from the parent class and override the differing parts. Implementing interfaces can also achieve similar results.
2. Polymorphism: The same method can have different implementations based on different input values. By adding different input values to handle different cases, existing methods can be extended without modification.
3. Design patterns offer classic solutions for flexible design. For example, the Builder pattern provides a flexible way to create objects, the Decorator pattern allows dynamic addition of additional functionality, and the Dependency Injection pattern separates variable logic into independent interfaces, implementing different behaviors based on the injected interface.