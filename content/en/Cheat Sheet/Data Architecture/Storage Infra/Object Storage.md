---
title: "Object Storage"
weight: 6
---

### **Description**

Object Storage is a storage architecture that treats each file as an individual object with a unique ID. Access to these files is done through the use of RESTful API. Files can include various types such as images, videos, or general documents, and they can be flexibly stored in a distributed environment. Object Storage is often accompanied by redundant multiple backups to prevent data loss in case of disasters.

### **Use Cases**

- Large-scale file storage needs
- Content Delivery Networks (CDNs), photo albums, video streaming
- Independent files: Storing a large number of images, videos, and general documents, rather than a group of related structured files (e.g., databases).

### **Advantages**

- Easy storage and backup: Each file is stored independently, allowing for distributed storage and backups.
- Easy access: Files can be accessed through a RESTful API.

### **Disadvantages**

- Unable to store structured data: Object Storage is primarily used for storing unstructured files and is not suitable for structured data or relational data storage.
- Cannot be mounted as a network drive for traditional operating systems: Object Storage cannot be directly mounted as a network drive for traditional operating systems like Block Storage. Instead, access is done through an API.
- Complex architecture: Object Storage has a relatively complex architecture, requiring more configuration and management.