/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
console.log("QUESTAO 2:");
var fibonacci = [0, 1];
var numero = 5;

while (numero < 100) {
    numero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(numero);
}
console.log(fibonacci);

var numero = 34;

var resultado = false;

for (var i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] == numero) {
        resultado = true;
    }
}

if (resultado) {
    console.log("O número " + numero + " pertence à sequência de Fibonacci.");
}
else {
    console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
}