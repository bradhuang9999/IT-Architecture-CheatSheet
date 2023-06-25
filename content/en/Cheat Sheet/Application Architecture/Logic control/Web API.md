---
title: "Web API"
date: 2023-06-25
weight: 2
---

### **Overview:**

Web API provides services to external clients or other internal systems through HTTP, HTTPS, or other web interfaces.

### **Use Cases:**

- Resource or service provisioning: Internal systems, partner companies, customers, or the general public.
- Communication and data exchange: Internal systems, partner companies, customers.
- Used by other applications for calling, such as backend services for mobile devices.

### **Advantages:**

- Reduced system coupling.
- Provides standardized interfaces for external invocation.

### **Disadvantages:**

- Security: If transmitting data over the public network, it is important to address security issues through mechanisms such as HTTPS and authentication.
- Potential high request volume: Mechanisms like horizontal scaling may be needed to handle flexible request volume requirements.

### **Common authentication mechanisms:**

- JWT
- OAuth
- SAML
- API keys

### **Common data exchange formats:**

- JSON
- XML
- CSV