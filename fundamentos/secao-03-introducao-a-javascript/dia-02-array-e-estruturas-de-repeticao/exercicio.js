// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// Some todos os valores contidos no array e imprima o resultado.
// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// Utilizando for, descubra o maior valor contido no array e imprima-o.
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.



const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let bigger = numbers[0];
let counter = 0;

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    console.log(`${sum += numbers[index]}`);
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
    if (numbers[index] % 2 !== 0) {
        counter += 1;
    }
}

const odd = counter > 0 ? `Existe(m) ${counter} número(s) ímpares`:`Nenhum valor ímpar encontrado`;
console.log(odd);
console.log(`O maior número é: ${bigger}.`);
let average = sum / numbers.length;
console.log(`A média aritmética é: ${average}.`);

if (average > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}
