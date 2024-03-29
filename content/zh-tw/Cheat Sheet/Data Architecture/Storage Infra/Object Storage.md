---
title: "Object Storage"
weight: 6
---

### **描述**

Object Storage是一種儲存架構，以每一個檔案為單位，各檔案給予一個獨立的ID。通過這個ID搭配RESTful API進行存取。檔案的類型可以為圖片、影片或一般文件。這些檔案可以彈性地存放於分散式環境。通常搭配冗餘多重備份機制，以避免因災難造成資料遺失。

### **使用情境**

- 大量的檔案儲存需求
- CDN、相簿、影片串流
- 獨立的檔案: 儲存大量的圖片、影片、一般文件，較不適合儲存一組相關聯的結構性檔案。例如: 資料庫

### **優點**

- 易於儲存與備份: 各個檔案獨立，方便分散式儲存與備份
- 易於存取: 通過RESTful API即可存取檔案

### **缺點**

- 無法儲存結構性資料: Object Storage主要用於儲存非結構化的檔案，不適合存儲結構化資料或關聯性數據。
- 無法掛載為傳統作業系統的網路磁碟機: Object Storage無法像傳統的Block Storage那樣直接掛載為傳統作業系統的網路磁碟機，而是通過API進行存取。
- 架構較複雜: Object Storage的架構相對複雜，需要更多的配置和管理。