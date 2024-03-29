---
title: "介面隔離原則"
weight: 2
---

### **描述**

為了提升程式碼的可讀性和可維護性，一個類別不應該被強制實作不需要的方法。因此，當某些情況下某個介面的某些功能不需要被實作時，應將該介面拆分為多個子介面。

### **舉例**

舉個例子來說，假設有一個名為「DataManager」的介面，負責資料的查詢和修改。若有些情況下只需要實作查詢功能，那麼應該將「DataManager」介面拆分為「DataReader」和「DataModifier」兩個子介面。這樣，每個子介面可以根據具體需求獨立實作，提升彈性和可擴展性。