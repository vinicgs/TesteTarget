/* 5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

console.log("QUESTAO 5:");
let palavra = "Estagio em desenvolvimento";
let inverso = "";
for (let i = palavra.length - 1; i >= 0; i--) {
    inverso += palavra[i];
}
console.log(`String invertida: ${palavra} - ${inverso}`);