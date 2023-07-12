---
title: "Liskov Substitution Principle"
weight: 3
---

### **Description**

The concept of the Liskov Substitution Principle states that a subclass should be able to completely substitute its superclass in any usage.

If a subclass is not designed according to the Liskov Substitution Principle, other parts of the program may encounter errors because they may not know the specific implementation of the superclass and expect consistent behavior. Therefore, a subclass should maintain the same behavior as the superclass and only provide additional details or extensions. If different functionality is truly needed, it indicates that separate classes should be created instead of modifying the inheritance of the superclass.

### **Preconditions for Substituting the Superclass**

- The behavior should be consistent with the superclass.
- Only the details of the behavior should be extended.

### **Example**

- An interface called "DataReader" for reading different types of data, such as from files, databases, or networks. According to the Liskov Substitution Principle, any class implementing the "DataReader" interface should be able to replace the usage of "DataReader" and provide consistent behavior.