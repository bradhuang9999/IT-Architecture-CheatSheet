---
title: "Reverse Proxy"
weight: 4
---

### Description

A Reverse Proxy exists on the server side and is responsible for receiving client requests and forwarding them to backend servers.

### Advantages

- Horizontal scalability: Since client requests are forwarded through the reverse proxy, multiple servers on the server side can simultaneously provide services, increasing availability.
- Load balancing: Requests can be balanced among the servers according to configuration, avoiding excessive traffic to specific servers.
- Error detection: If a specific server fails a certain number of times, it can be automatically stopped from receiving requests.
- URL redirection: Requests can be forwarded to the corresponding server and port based on the requested URL and port.
- Protection: It avoids exposing the real IP of the servers and blocks malicious packets, such as allowing requests based on whitelist and blacklist IP controls.
- Content caching: Recent response content can be cached to reduce the load on backend servers.
- Support for HTTPS: The reverse proxy can perform HTTPS encryption and authentication, relieving the backend servers from handling SSL.

### Disadvantages

- Complex architecture: The involvement of a reverse proxy server in packet forwarding makes the routing path more complex.
- Single point of failure: Client requests are relayed through the reverse proxy, so if the reverse proxy server fails, the service may be interrupted. This can be mitigated by horizontal scaling or clustering.

### Examples

- Nginx
- Apache
- IIS