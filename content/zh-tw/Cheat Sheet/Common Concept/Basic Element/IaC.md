---
title: "基礎設施即代碼"
date: 2023-06-10
weight: 1
---

### 描述

IaC (Infrastructure as Code)是一種通過編寫程式碼來記錄基礎設施的相關組態需求的方法。借助特定的工具，可以將這些程式碼部署到多個裝置上，並對裝置狀態進行變更，以實現快速部署的目標。通常有兩種模式的程式碼可以實現 IaC，一種是描述預期的變更內容，另一種是描述預期的系統狀態。

### 優點

- 快速管理：可快速部屬、管理多台伺服器的狀態
- 快速了解異動內容：預計異動內容皆紀錄於代碼
- 可以追溯變更：相關異動歷程的紀錄於版本庫

### 缺點

- 搭建IaC的複雜度較高
- 學習成本: 相關代碼與工具由於較複雜，需要較長學習時間。

### 案例

- Anisble
- Puppet
- Terraform
- Docker
- AWS CloudFormation
- Google Cloud Deployment Manager
- Azure Resource Manager (ARM)