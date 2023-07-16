---
title: "Asymmetric cryptography"
weight: 2
---

### **Description**

Asymmetric encryption is a cryptographic technique that, unlike symmetric encryption, uses a pair of keys, including a public key and a private key, for encryption and decryption operations.

Here's how it works: A pair of public and private keys is generated. The public key can be distributed to others over the network, while the private key must be kept secret and not transmitted over the internet. During the encryption process, the sender uses the private key to encrypt the data or create a digital signature. The receiver, upon receiving the encrypted data, uses the public key to decrypt it or verify the signature. If the decryption or verification is successful, it confirms that the data indeed comes from the corresponding private key and has not been tampered with during transmission.

### **Use Cases**

- **Digital Signatures:** Used to verify the authenticity and integrity of files or data, preventing forgery or tampering.
- **Message Encryption:** Used to protect sensitive information during network transmission, where only the private key holder can decrypt and read the content.
- **HTTPS Communication:** Used to encrypt the transmission data of websites, ensuring privacy and security during communication.
- **Secure Transmission of Symmetric Encryption Keys:** In symmetric encryption, asymmetric encryption algorithms can be used to securely transmit the symmetric encryption key, ensuring it remains confidential during transmission.

### **Advantages**

- **Higher Security:** The private key is not transmitted over the network, and only the private key holder can decrypt or sign the data, providing higher security.
- **Secure Key Exchange:** Can be used for secure exchange of symmetric encryption algorithm keys, enhancing the overall system security.

### **Disadvantages**

- **Slower Encryption/Decryption Speed:** Asymmetric encryption algorithms are more complex compared to symmetric encryption, requiring more time to complete encryption and decryption operations.

### **Examples**

- **RSA (Rivest-Shamir-Adleman)**
- **DSA (Digital Signature Algorithm)**
- **ECC (Elliptic Curve Cryptography)**