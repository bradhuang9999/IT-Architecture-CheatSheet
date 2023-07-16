---
title: "Deffie-Hellman"
weight: 5
---

### **Description**

The Diffie-Hellman (DH) algorithm is used to generate a secure communication key in an insecure network environment.

### **Basic Procedure**

1. Alice first provides Bob with a large prime number, denoted as "p," and a smaller exponent, denoted as "g," to be used for calculations.
2. Both Alice and Bob generate secret numbers, denoted as "a" and "b" respectively, which are kept private and not transmitted over the network.
3. Alice computes the public value A = (g^a) mod p and shares it with Bob.
4. Bob computes the public value B = (g^b) mod p and shares it with Alice.
5. Alice uses the public value B provided by Bob and her own secret number a to compute the key K = (B^a) mod p.
6. Bob uses the public value A provided by Alice and his own secret number b to compute the key K = (A^b) mod p.
7. Since both parties use the same public values and secret numbers for calculations, the resulting key K will be the same for both Alice and Bob.
8. With this shared key K, Alice and Bob can engage in secure encrypted communication.