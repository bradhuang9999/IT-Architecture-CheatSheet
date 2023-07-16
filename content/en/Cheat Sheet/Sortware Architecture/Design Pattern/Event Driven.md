---
title: "Event Driven"
weight: 2
---

### **Description**

Event-driven pattern is a programming design pattern where events are registered and specific logic is associated with the occurrence of each event. In this pattern, the event handling logic is decoupled from the event triggering points, eliminating the need to directly specify the location of event triggers in the code. Instead, event registration and triggering systems are used to dynamically connect event triggers with their corresponding handling logic.

### **Advantages**

- Decoupling: Event handling logic is decoupled from event triggers, resulting in a more flexible and maintainable code structure.
- Asynchrony: Event triggers can quickly respond to users without waiting for the completion of event handling logic, improving system responsiveness.

### **Disadvantages**

- Unclear flow: Since event registration and triggering systems dynamically call event handling logic, it may be challenging to understand and trace the subsequent event flow.
- Difficult transaction control: As event handling logics are independent from each other, it is difficult to track and control the results of previous event handling stages within a specific event handling logic.
- Performance impact: The system's performance may be affected due to the dynamic triggering and processing of a large number of events. Proper design and management of event registration are necessary to avoid performance issues.