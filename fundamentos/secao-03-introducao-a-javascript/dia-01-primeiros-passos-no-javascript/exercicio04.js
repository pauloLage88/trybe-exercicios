//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const anguloA = 30;
const anguloB = 60;
const anguloC = 90;

if (anguloA + anguloB + anguloC === 180) {
    console.log(`É um triângulo!`);
} else {
    console.log(`Não é um triângulo.`);
}
