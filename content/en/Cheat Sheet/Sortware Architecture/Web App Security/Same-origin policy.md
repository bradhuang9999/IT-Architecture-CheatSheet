---
title: "Same-origin policy"
weight: 2
---

### **Description**

Same-origin policy is a browser security mechanism that restricts access to cookies, DOM, localStorage, indexedDB, and limits the use of AJAX calls from different domains. It helps to mitigate the risks of XSS attacks and cookie leakage from external sources.

If there is a need to access resources from other domains, it can be achieved through Cross-Origin Resource Sharing (CORS) or JSONP. CORS allows other domains to access resources by adding the Access-Control-Allow-Origin header in the response. JSONP bypasses the same-origin policy restriction by loading a script tag in HTML.