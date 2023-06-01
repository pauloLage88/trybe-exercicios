
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

const word = 'tryber';
let revArray = [];
let counter = 0;
for (let i = word.length - 1; i >= 0 ; i -= 1) {
    revArray.push(word[i]);
}
console.log(revArray.join(''));

// Solução c/ as funções split, reverse e join:
// let rev = [];
// rev = word.split('').reverse().join('');
// console.log(rev);