/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */
console.log("QUESTAO 4:");
let fatura_mensal = [
    { estado: "SP", fatura_mensal: 67.836 },
    { estado: "RJ", fatura_mensal: 36.678 },
    { estado: "MG", fatura_mensal: 29.229 },
    { estado: "ES", fatura_mensal: 27.165 },
    { estado: "Outros", fatura_mensal: 19.849 },
]

let faturamento_total = 0;
for (let i = 0; i < fatura_mensal.length; i++) {
    faturamento_total += fatura_mensal[i].fatura_mensal;
}

for (let i = 0; i < fatura_mensal.length; i++) {
    console.log
        (`${fatura_mensal[i].estado} - ${parseFloat(
            (fatura_mensal[i].fatura_mensal / faturamento_total) * 100).toFixed(2)}%`);
}