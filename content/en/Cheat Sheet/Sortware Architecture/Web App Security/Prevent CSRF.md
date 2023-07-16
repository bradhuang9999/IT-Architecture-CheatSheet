---
title: "Prevent CSRF"
weight: 4
---

### **Description**

Cross-Site Request Forgery (CSRF) is an attack method that exploits the authenticated session of a user on a website to perform malicious actions on a targeted website.

### **Attack Scenario**

Background: The user is already logged in to the targeted website, and the browser has the website's cookies stored.

Attack: The user visits a malicious website that contains an image or hyperlink. When the user interacts with the image or hyperlink, it triggers a request to the targeted website with malicious content. Since the request carries the correct cookies, the targeted website trusts the request and becomes vulnerable to the attack.

### **Prevention Methods**

1. The server-side should check whether the Origin or Referer in the request headers matches the domain of the targeted website. If they don't match, the server should reject the request.
2. When generating web pages, the server-side should generate a random CSRF token and store it in the user's session instead of cookies. Each time a request is received, the server-side should verify if the CSRF token in the request matches the one stored in the user's session to ensure the request comes from the correct webpage.