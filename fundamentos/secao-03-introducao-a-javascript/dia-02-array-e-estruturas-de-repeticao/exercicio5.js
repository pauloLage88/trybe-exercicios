//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 10;
let array = [];
for (let index = 0; index < n; index += 1) {
    array.push('*');
    console.log(array.join(''));
}