---
title: "Digital signature"
weight: 4
---

### **Description**

Digital signature is a process of signing a document using a private key. Since the private key is not transmitted externally, the recipient of the document can verify the signature by successfully validating it using the corresponding public key, thus confirming that the document was signed by the owner of the private key.

### **Process of Digital Signature**

1. The sender generates a digital digest of the original document content using a hash algorithm.
2. The sender encrypts the digital digest using their private key to create a digital signature.
3. The recipient uses the sender's public key to decrypt the digital signature and obtain the digital digest.
4. The recipient generates a digital digest of the received document content using the same hash algorithm.
5. The recipient compares the generated digital digest with the decrypted digital digest to verify if they match. If they do, it confirms that the document is intact and originated from a trusted entity.

### **Use Cases**

- Ensuring Document Authenticity: Documents exchanged over the internet are vulnerable to tampering. By using digital signature mechanisms, the authenticity of a document can be verified, ensuring that it was generated by the owner of the private key and has not been altered.