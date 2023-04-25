//5) Escreva um programa que inverta os caracteres de um string


//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// Nesse caso a entrada da string, eu optei por que seja em readline, mas poderia ser em prompt, por exemplo.
// Assim o codigo irá ler a string enviada pelo usuário e irá inverter a ordem dos caracteres e irá imprimir no console o resultado.
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite uma frase: ", (str) => {
//b) Evite usar funções prontas, como, por exemplo, reverse;
// Para inverter a string, eu criei uma variável vazia e um for que irá percorrer a string de trás para frente e irá adicionar cada caracter na variável vazia.
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
  readline.close();
});

// Digitando a frase "O rato roeu a roupa do rei de roma", o resultado será "amor ed ier od apuor a ueor otar O"