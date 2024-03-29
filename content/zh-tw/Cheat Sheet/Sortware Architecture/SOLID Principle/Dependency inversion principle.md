---
title: "依賴反轉原則"
weight: 4
---

### **描述**

依賴反轉原則是指在元件設計時，避免直接在元件內部實例化具有不同實作內容的物件，以應對不同情境的呼叫需求。相反地，元件應透過指定傳入的介面，將可能變動的邏輯由外部傳入。這樣做可以降低程式碼間的耦合度。

具體實現依賴反轉原則的方式如下：

1. 依賴注入：元件在設計時指定傳入的介面，當使用該元件時，透過傳入的介面實作來動態決定該元件的功能實現方式。
2. 依賴尋找：利用像 Spring 這樣的容器管理機制，容器能夠在需要時動態回傳所需類別的具體實作物件。