//Agora, inverta o lado do triângulo.

const n = 10;
let array = [];

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < (n - i); j += 1) {
        array.push(' ');
    }
    for (let k = 0; k <= i; k += 1) {
        array.push('*');
    }
    console.log(array.join(''));
    array = [];
}