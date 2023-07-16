---
title: "Symmetric cryptography"
weight: 1
---

### **Description**

Symmetric encryption is a cryptographic technique that uses the same key for both encryption and decryption of data.

### **Use Cases**

- Symmetric encryption is suitable for scenarios that require an efficient data encryption mechanism, often combined with secure key distribution mechanisms to prevent key leakage.

### **Advantages**

- Fast encryption and decryption speed, making it suitable for data transmission.

### **Disadvantages**

- Since the same key is used for both encryption and decryption, there is a security risk if the key is transmitted over the network.
- Secure key exchange techniques can be used to generate shared keys, such as:
    1. Encrypting the key using RSA for transmission.
    2. Using the Diffie-Hellman algorithm to generate mutually communicable keys.

### **Examples**

- DES (Data Encryption Standard): (Obsolete) DES algorithm is no longer recommended for use due to its vulnerability to brute force attacks.
- AES (Advanced Encryption Standard): A widely used symmetric encryption algorithm known for its security and efficiency.