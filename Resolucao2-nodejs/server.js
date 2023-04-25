function fibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0) {
    return "O número pertence à sequência de Fibonacci.";
  }

  while (b <= numero) {
    if (b === numero) {
      return "O número pertence à sequência de Fibonacci.";
    }
    let temp = a + b;
    a = b;
    b = temp;
  }

  return "O número não pertence à sequência de Fibonacci.";
}

console.log(fibonacci(21)); 
console.log(fibonacci(25)); 

// declaramos a nossa função recebendo como parametro o numero que queremos verificar
// declaramos duas variaveis a e b, a é o primeiro numero da sequencia e b o segundo
// se o numero for 0, retornamos que ele pertence a sequencia
// enquanto b for menor ou igual ao numero que queremos verificar, se b for igual ao numero, retornamos que ele pertence a sequencia
// declaramos uma variavel temporaria que recebe a soma de a e b
// a recebe b
// b recebe temp
// retornamos que o numero não pertence a sequencia
// chamamos a função passando o numero que queremos verificar

