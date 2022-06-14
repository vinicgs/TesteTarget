/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */
console.log("QUESTAO 3:");
var dados = require('./dados.json');
var total = 0;
var dias = 0;
var media = 0;
var maior = 0;
var auxiliar = 0;
var menor;
var diasMaiores = 0;

for (var i = 0; i < dados.length; i++) {
    var variavel = dados[i].valor
    if (variavel > 0) {
        total += variavel;
        dias++;
        auxiliar = variavel;

        if (variavel > maior) {
            maior = variavel
        }

        if (auxiliar < menor || menor == undefined) {
            menor = auxiliar
        }
    }
    media = total / dias;
}

for (var i = 0; i < dados.length; i++) {
    var teste = dados[i].valor
    console.log(teste)
    console.log(media)

    if (teste > media && teste > 0) {
        diasMaiores++;
    }
}

console.log("O menor valor de faturamento ocorrido em um dia do mês é: " + menor);
console.log("-----------------------------------------------------");
console.log("O maior valor de faturamento ocorrido em um dia do mês é: " + maior);
console.log("-----------------------------------------------------");
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + diasMaiores);
console.log("-----------------------------------------------------");
console.log("A média mensal é: " + media);
console.log("-----------------------------------------------------");


