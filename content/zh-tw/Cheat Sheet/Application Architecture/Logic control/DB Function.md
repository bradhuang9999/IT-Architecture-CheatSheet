---
title: "DB Function"
date: 2023-07-01
weight: 6
---

### 描述

DB Function是在DB端的一種程式，按照資料庫種類的語法會不一樣，例如PL/SQL, T-SQL。
如同一般程式Function，取得傳入值並進行邏輯處理後，回傳結果。

### 與DB Procedure的差異

- 可以在SQL中使用
- 通常不能在DB Function中異動資料

### 使用情境

- 在SQL中，抽出重複性的子查詢指令
- 在SQL中，撰寫需有較複雜程式處理的邏輯