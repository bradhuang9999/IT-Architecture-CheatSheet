---
title: "Hashing"
weight: 3
---

### **Description**

A hash algorithm is an algorithm that generates a digest by compressing and transforming data.

### **Characteristics**

- The same input will always produce the same fixed hash value, and it is not possible to reverse-engineer the original content from the hash value.
- There are multiple implementations of hash algorithms, such as MD5 and SHA.
- Some hash algorithms are considered insecure and should be avoided, such as MD5 and SHA1. Careful consideration should be given when selecting a hash algorithm.
- The difficulty of cracking a hash algorithm can be increased by using a salt value.

### **Use Cases**

- Digital Signatures: Generate a hash value for text and encrypt it using a private key. Transmit the hash value along with the text to verify that the text has not been tampered with.
- Password Storage: Convert passwords into hash values and store them in a database. When a user logs in, convert the entered password into a hash value and compare it for verification. Even if a hacker gains access to the database, the irreversible nature of the stored hash values helps prevent password leaks.
- Generating Hash Tables: In system architectures, hash tables can be used to quickly search for target values in large datasets in constant time.
- Error Detection: By utilizing the property that different data yields different hash values, hash values can be used to verify if data has been lost during transmission.

### **Examples**

- MD2, MD4, MD5
- SHA1, SHA2, SHA256
- RIPEMD