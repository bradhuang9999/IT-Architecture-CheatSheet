---
title: "Proxy"
weight: 3
---

### Description

A Proxy (Proxy Server) is a server that acts as an intermediary between internal network devices and external networks.

### Advantages

- Filtering of risky websites: It can be configured with a website blacklist to prevent internal users from accessing high-risk websites.
- Blocking of malicious data: It can check the returned content for any attack strings.
- Hiding of real IP: It prevents external attackers from directly calling internal devices.
- Caching of website data: It can cache recently accessed static content, reducing network traffic.

### Disadvantages

- Single point of failure: If the proxy server fails, internal devices will be unable to access the external network.
- Impact on network speed: Since the proxy server is responsible for filtering and transforming packets, it may cause some degree of network latency.