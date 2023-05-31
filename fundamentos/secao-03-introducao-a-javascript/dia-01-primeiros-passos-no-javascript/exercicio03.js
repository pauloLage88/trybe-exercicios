let num1 = 6000;
let num2 = 90500;
let num3 = 123;
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let bigger = null;

if (num1 > num2 && num1 > num3) {
    bigger = num1;
} else if (num2 > num3) {
    bigger = num2;
} else {
    bigger = num3;
}

console.log(`${bigger} é o maior dos três números.`);