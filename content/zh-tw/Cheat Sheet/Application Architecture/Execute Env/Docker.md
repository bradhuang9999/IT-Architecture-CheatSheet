---
title: "Docker"
date: 2023-06-10
weight: 1
---

### 概述:

容器化技術的代表性產品，在同一作業系統中分隔獨立的軟體運作環境。

### 情境:

- 開發與測試：在開發與測試階段，使用Docker可以少量系統資源提供與正式環境一致的測試環境。
- 直接使用已封裝的應用程式映像檔：Docker生態系統可找到許多可直接使用的各式應用程式映象檔，節省在不同環境建置、設定應用程式的時間。
- 隔離多個應用程式環境：在同一伺服器中，分隔多個容器，以避免不同應用程式的版本與設定衝突或是使用時影響其他應用程式
- 快速部屬：Docker的輕量化特性，適合快速在多台伺服器部屬應用程式
- 微服務架構：Docker本身的隔離特性適合與微服務進行結合，微服務將應用程式拆為多個小程式，搭配使用Docker可快速、有彈性的依使用需求動態調整各微服務的容器數量。
- 雲原生程式：由於雲端以系統資源使用量為計價、以及可快速依需求提供多台運算資源。所以Docker的輕量化與快速部屬特性極適合雲端環境。

### 優點:

- 輕量化：由於容器內不包含作業系統，可以因此快速啟動，並且使用較少系統資源。
- 隔離性：各個容器獨立執行，避免應用程式的衝突。並且在任一容器錯誤時，可獨立重啟而不影響其他現有容器。
- 安全性：以容器隔離不同的應用程式，可增加安全性。
- 還原性：可監控容器的狀態並自動重啟。
- 管理機制豐富：內建多種管理容器的機制，例如：資源監控、錯誤偵測、自動重啟等。
- 避免作業系統產生的衝突：由於在作業系統上再封裝一個抽象層，因此可解決在傳統不同版本作業系統差異而造成的管理困難。
- 隨時啟用：由於具有獨立的運作環境，不受不同作業系統版本的差異影響。可直接載入並啟用開發商或社群所提供的映象檔。
- 水平伸縮：易於部屬與擴展，可快速新增或移除容器，以應對流量變化。
- CICD機制：將Dockerfile等建置映像檔所需的資料放入版本庫中之後，可自動產生、驗證、部屬映像檔。
- 提供IaC機制：由於Dockerfile中記載完整的容器建置過程，因此具有IaC的相關優點，例如方便追蹤容器建置的細節差異。
- 版本控制與快速回滾：可同時有新舊版本的映像檔，方便在錯誤時快速切換版本。

### 缺點:

- 安全性：預設以Root身分啟動容器，這會造成潛在的風險。可以改成以其他身分啟動容器，但是實作上較複雜。
- 學習門檻：Docker的容器化機制有其複雜度，需要較長的學習期間，以理解其資料持久化、網路配置、自動重啟等機制。