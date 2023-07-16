---
title: "Prevent SQL injection"
weight: 5
---

### **Description**

SQL injection attack refers to directly concatenating untrusted variables into SQL strings. If these variables contain malicious content, the database may be vulnerable to attacks or unauthorized data retrieval. There are two methods to prevent SQL injection:

1. Avoid directly concatenating untrusted variables into SQL strings and instead use parameterized queries or prepared statements to pass variables. For example, in Java, you can use PreparedStatement to pass variables:
    
    Example with SQL injection vulnerability:
    
    ```java
    String title = request.getParameter("title"); // Untrusted variable from frontend
    String sql = "SELECT * FROM booking WHERE title = " + title;
    Statement stmt = conn.createStatement();
    stmt.executeQuery(sql);
    
    ```
    
    Example with the fix:
    
    ```java
    String title = request.getParameter("title"); // Untrusted variable from frontend
    String sql = "SELECT * FROM booking WHERE title = ?";
    PreparedStatement stmt = conn.prepareStatement(sql);
    stmt.setString(1, title);
    stmt.executeQuery();
    
    ```
    
2. Check if untrusted variables contain dangerous strings or unexpected content, such as single quotes or semicolons. If they contain dangerous strings, throw an error or handle them appropriately.