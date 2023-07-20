---
title: "DB Procedure"
date: 2023-07-01
weight: 5
---

### 概述:

DB Procedure是存放於資料庫的程式，通常是以SQL為核心，搭配變數、邏輯判斷、迴圈的程式，以達到於資料庫高效處理資料的目的。

### 優點

- 在資料庫端即可處理複雜的資料處理，有效的處理大量資料，避免網路延遲與資料傳輸量的問題
- 在資料庫端處理，可以更方便的處理事務(Transaction)管理

### 缺點

- 難以除錯與開發: 較難設定中斷點、記錄程式運行的Log、也較少方便、提供程式碼提示的編輯器。
- 基於程式架構的原因，難以使用現代的程式概念，例如: 物件導向。
- 耦合度較高: 由於程式都是在資料庫中，程式之間以及程式與資料表之間的耦合度很高。
- 較難更新程式: 更新DB Procedure與資料表時容易造成相關連物件的錯誤。難以達到zero down time的程式更新。
- 程式綁定特定資料庫，難以遷移至其他資料庫產品。

### 案例

- PL/SQL: Oracle資料庫的DB Proecdure
- T-SQL: SQL Server資料庫的DB Proecdure