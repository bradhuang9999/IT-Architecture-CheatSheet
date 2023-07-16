---
title: "HTTPS"
weight: 4
---

### **Description**

HTTPS (Hypertext Transfer Protocol Secure) aims to protect the communication security and data integrity between network entities through the use of the Transport Layer Security (TLS) protocol.

### **Characteristics**

1. HTTPS utilizes a combination of symmetric and asymmetric encryption for transmission, ensuring data security and efficiency. Asymmetric encryption is used for establishing secure connections and performing authentication, while symmetric encryption is used for encrypting transmitted data.
2. URLs in HTTPS begin with "https://" and, by default, use port 443 instead of the default port 80 used by HTTP. This configuration helps differentiate between regular HTTP connections and secure HTTPS connections.
3. When using HTTPS on the internet, it requires obtaining digital certificates from trusted Certificate Authorities (CAs). These certificates are used to verify the identity of servers, ensuring communication encryption and authenticity. In private internal networks, self-signed certificates can be used but need to be pre-installed and trusted on each device.
4. The primary purpose of HTTPS is to protect the confidentiality and integrity of communication content. Through the use of the TLS protocol, it provides end-to-end encryption, ensuring data security during transmission. However, HTTPS does not fully protect against other types of attacks, such as DDoS (Distributed Denial of Service) attacks and malware. Therefore, a comprehensive security strategy should include additional security measures like firewalls, intrusion detection systems, etc.

### **Handshake Process**

**Application Stage:**

1. The website generates a website public key (site.pub) and a website private key (site.key).
2. Using the website private key and website information, a certificate signing request (CSR) file (site.csr) is created and provided to a Certificate Authority (CA).
3. After verifying the identity, the CA signs the CSR content with its private key, generating a website certificate (site.crt).
4. The website certificate is provided to the website administration.

**Handshake Stage:**

1. The browser requests a HTTPS connection with the website, and the website provides its website certificate (server.crt).
2. The certificate's validity, including its dates and other certificate data, is checked.
3. If the certificate's issuer is a CA trusted by the browser, the browser uses the CA's public key stored in its memory to decrypt the signature in server.crt. If successful, it means the certificate was issued by a trusted CA. The decrypted signature hash value is obtained.
4. The data specified by the signature is hashed using the hash algorithm specified in the signature to generate a hash value, which is compared to the original hash value attached to the signature. If they match, it confirms that the data hasn't been tampered with.
5. A symmetric encryption key is generated for encryption and encrypted using the website's public key from site.crt. The encrypted key is then sent to the website.
6. The website decrypts the encrypted key using its private key, obtaining the symmetric encryption key.
7. At this stage, both parties have completed authentication and securely exchanged the symmetric encryption key.

**Communication Stage:**

1. The browser encrypts the request using the symmetric encryption key, and the server decrypts it using the same key.
2. The server encrypts the response using the symmetric encryption key, and the browser decrypts it using the same key.