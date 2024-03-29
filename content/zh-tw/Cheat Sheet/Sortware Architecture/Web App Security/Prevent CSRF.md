---
title: "防範 跨站請求偽造"
weight: 4
---

### **描述**

Cross-Site Request Forgery (CSRF) 是一種攻擊方式，利用已登入網站的使用者認證，對攻擊目標網站執行惡意行為。

### **攻擊範例情境**

背景: 使用者已經登入攻擊目標網站，並且瀏覽器中保存有該網站的 Cookie。

攻擊: 使用者訪問一個惡意網站，該網站中包含一個圖片或超連結，該圖片或超連結會向攻擊目標網站發送帶有攻擊內容的請求。由於該請求攜帶了正確的 Cookie，攻擊目標網站會信任此請求，從而受到攻擊。

### **防範方式**

1. 伺服器端應檢查請求的標頭中的 Origin 或 Referer 是否與目標網站的網域一致，若不一致，則拒絕處理此請求。
2. 伺服器端在生成網頁時，應生成一個具有隨機性的 CSRF token，並將其存儲在使用者的會話中而非 Cookie 中。每次收到請求時，伺服器端需檢查該請求攜帶的 CSRF token 是否與使用者會話中的相符，以確認請求是否來自正確的網頁。