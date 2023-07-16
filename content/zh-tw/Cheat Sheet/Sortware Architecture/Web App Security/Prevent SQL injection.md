---
title: "防範 SQL injection"
weight: 5
---

## 描述

SQL injection 攻擊是指直接把不可信任的變數直接串上 SQL 字串，若此變數內含攻擊內容，則資料庫可能會被攻擊或取出未經授權的資料。避免 SQL injection 的方法有兩種：

1. 不要直接把不可信任的變數串上 SQL 字串，而是使用元件傳遞變數的方式。例如，在 Java 中可以使用 PreparedStatement 來傳遞變數：
    
    有SQL injection 風險的範例
    
    ```java
    String title = request.getParameter("title"); // 從前端傳來的變數
    String sql = "SELECT * FROM booking WHERE title = " + title;
    Statement stmt = conn.createStatement();
    stmt.executeQuery(sql);
    ```
    
    修正後的範例
    
    ```java
    String title = request.getParameter("title"); // 從前端傳來的變數
    String sql = "SELECT * FROM booking WHERE title = ?";
    PreparedStatement stmt = conn.prepareStatement(sql);
    stmt.setString(1, title);
    stmt.executeQuery();
    ```
    
2. 檢查不可信任的變數是否包含危險字串或非預期的內容，例如單引號、分號等。如果包含危險字串，則拋出錯誤或進行適當的處理。