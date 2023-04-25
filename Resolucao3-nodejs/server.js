//a) 1, 3, 5, 7, ___
// A logica do a) é somar 2 a cada número anterior. O próximo número é 9.
let a = [1, 3, 5, 7];
let nextA = a[a.length - 1] + 2;
console.log(nextA); // 9

//b) 2, 4, 8, 16, 32, 64, ____
// A lógica é multiplicar cada número anterior por 2. O próximo número é 128.
let b = [2, 4, 8, 16, 32, 64];
let nextB = b[b.length - 1] * 2;
console.log(nextB); // 128

//c) 0, 1, 4, 9, 16, 25, 36, ____
// A lógica é elevar cada número anterior ao quadrado. O próximo número é 49.
let c = [0, 1, 4, 9, 16, 25, 36];
let nextC = Math.pow(c[c.length - 1], 2);
console.log(nextC); // 49

//d) 4, 16, 36, 64, ____
//A lógica é somar 12 ao número anterior. O próximo número é 100.
let d = [4, 16, 36, 64];
let nextD = d[d.length - 1] + 12;
console.log(nextD); // 100

//e) 1, 1, 2, 3, 5, 8, ____
// A lógica é somar os dois números anteriores. O próximo número é 13.
let e = [1, 1, 2, 3, 5, 8];
let nextE = e[e.length - 1] + e[e.length - 2];
console.log(nextE); // 13

//f) 2,10, 12, 16, 17, 18, 19, ____
// A lógica é somar 2 ao número anterior, exceto quando o número anterior for 17. O próximo número é 20.
let f = [2, 10, 12, 16, 17, 18, 19];
let nextF = f[f.length - 1] + 2;
console.log(nextF); 
