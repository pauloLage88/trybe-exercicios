// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n

let n = 5;
let array = [];
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        array.push('*');
    }
    console.log(array.join(''));
    array = [];
}