---
title: "Object Storage"
weight: 6
---

Description
Object Storage is a storage architecture where each file is treated as an individual object and is assigned a unique ID. Access to these objects is performed through a RESTful API. Files can include images, videos, or general documents and are stored flexibly in a distributed environment. Object Storage is often accompanied by redundant multiple backups to prevent data loss in case of disasters.

Use Cases
Large-scale file storage requirements.
CDNs, photo galleries, video streaming.
Independent files: Suitable for storing a large number of images, videos, and general documents, but less suitable for storing a group of related structured files, such as a database.
Advantages
Easy storage and backup: Each file is independent, allowing for distributed storage and backup.
Easy access: Files can be accessed through a RESTful API.
Disadvantages
Cannot store structured data: Object Storage is primarily designed for storing unstructured files and is not suitable for storing structured data or relational databases.
Cannot be mounted as a traditional network drive: Object Storage cannot be directly mounted as a network drive in traditional operating systems like Block Storage. Access is done through APIs.
Complex architecture: Object Storage has a relatively complex architecture that requires more configuration and management.