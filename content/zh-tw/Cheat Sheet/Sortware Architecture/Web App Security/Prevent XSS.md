---
title: "防範 XSS"
weight: 3
---

### **描述**

XSS（跨站指令碼攻擊）是一種常見的網站安全漏洞攻擊方式。攻擊者通過向網站注入惡意程式碼，使得使用者在瀏覽網站時執行該惡意程式碼，從而達到攻擊的目的，如重新導向到其他網站或竊取使用者輸入的資訊。

### **三種XSS類型**

- 反射型：惡意程式碼通過URL參數、Cookie或表單等使用者可控的資料傳入後端，後端將這些資料直接返回給前端，導致惡意程式碼在使用者瀏覽網頁時被執行。
- 儲存型：惡意程式碼被儲存在資料庫中，當從資料庫中提取資料並在前端呈現時，惡意程式碼被執行。
- DOM型：惡意程式碼通過Ajax等方式返回給前端，前端直接將惡意程式碼插入到頁面的DOM結構中，導致惡意程式碼被執行。

### **預防XSS的方式**

- 使用CSP（內容安全策略）來限制網頁的執行內容，防止惡意程式碼的注入和執行。
- 對輸出到網頁上的資料進行HTML編碼，確保不會顯示具有風險的內容，避免惡意程式碼的執行。
- 對傳輸到後端的資料進行輸入驗證和過濾，避免使用和儲存具有風險的內容。
- 定期對網站執行黑箱滲透測試、白箱原始碼掃描，以確保網站沒有安全性漏洞。