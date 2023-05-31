let salarioBruto = 3000.00;
let descontoINSS = 0;
let salarioBase = 0;
let descontoIR = 0;

if (salarioBruto <= 1556.94) {
    descontoINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    descontoINSS = salarioBruto * 0.11;
} else {
    descontoINSS = 570.88;
}

salarioBase = salarioBruto - descontoINSS;

if (salarioBase <= 1903.98 ) {
    descontoIR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    descontoIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    descontoIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    descontoIR = salarioBase * 0.225 - 636.13;
} else {
    descontoIR = salarioBase * 0.275 - 869.36;
}

console.log(salarioBruto - descontoINSS - descontoIR);