---
title: "同源政策"
weight: 2
---

### 描述

Same-origin policy是一種瀏覽器安全機制，此機制不允許其他網域的js存取目前網站的cookie, dom, localStorage, indexedDB，呼叫其他網域的ajax也會受到限制。以減少XSS, cookie洩漏等外部攻擊的風險。

如果想要存取其他網域的資源，可以通過跨域資源共享(CORS)或JSONP等方式實現。CORS藉由response header增加Access-Control-Allow-Origin來允許其他網域的資源。JSONP藉由在HTML中載入Script標籤來規避同源策略限制。