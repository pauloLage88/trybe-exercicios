//6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.

let num1 = 4;
let num2 = 7;
let num3 = 1;
let par = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 === 0) {
    par = true;
}
console.log(par);
