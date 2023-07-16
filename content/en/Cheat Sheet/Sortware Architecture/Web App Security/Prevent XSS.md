---
title: "Prevent XSS"
weight: 3
---

### **Description**

XSS (Cross-Site Scripting) is a common website security vulnerability that allows attackers to inject malicious code into a website. By injecting this code, attackers can execute it when users browse the website, achieving their malicious goals such as redirecting users to other websites or stealing user-entered information.

### **Three Types of XSS**

- Reflected XSS: Malicious code is injected into the backend through user-controlled data, such as URL parameters, cookies, or form inputs. The backend then returns this data directly to the frontend, causing the malicious code to be executed when users view the web page.
- Stored XSS: Malicious code is stored in a database. When data is retrieved from the database and rendered on the frontend, the malicious code is executed.
- DOM-based XSS: Malicious code is returned to the frontend through methods like Ajax. The frontend directly inserts the malicious code into the DOM structure of the page, resulting in the execution of the malicious code.

### **Preventing XSS**

- Use Content Security Policy (CSP) to restrict the execution of content on web pages, preventing the injection and execution of malicious code.
- Perform HTML encoding on data outputted to the web page to ensure that risky content is not displayed, preventing the execution of malicious code.
- Validate and filter input data transmitted to the backend to prevent the use and storage of risky content.
- Regularly conduct black-box penetration testing and white-box source code scanning on the website to ensure there are no security vulnerabilities.