---
title: "Hash雜湊"
weight: 3
---

### **描述**

雜湊演算法是通過壓縮和轉換生成摘要的一種演算法。

### **性質**

- 相同的原文將產生固定的雜湊值，且無法通過雜湊值逆推原文內容。
- 存在多種雜湊演算法的實現，例如MD5、SHA。
- 一些雜湊演算法已被認為是不安全的，應避免使用，例如MD5、SHA1。應謹慎選擇雜湊演算法。
- 可以使用鹽值（Salt）來增加雜湊演算法的破解難度。

### **使用情境**

- 數位簽名：將文字生成雜湊值，並使用私鑰進行加密，將雜湊值與文字一起傳輸，用於驗證文字未被篡改。
- 密碼儲存：將密碼轉換為雜湊值儲存在資料庫中。使用者登錄時，將輸入的密碼轉換為雜湊值進行比對驗證。即使駭客獲取了資料庫權限，由於資料庫中記錄的是無法還原的雜湊值，因此可以避免密碼洩露。
- 生成雜湊表：在系統架構中，通過雜湊表可以在常數時間內在大量資料中快速尋找目標值。
- 錯誤校正：通過資料內容不同，雜湊值也不同的特性，使用雜湊值驗證資料傳輸中是否丟失。

### **案例**

- MD2, MD4, MD5
- SHA1, SHA2, SHA256
- RIPEMD