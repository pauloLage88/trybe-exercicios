// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.

// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:

// { 
//     Melancia: 3,
//     Abacate: 1,
//     Uva: 1 
//   }

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates....

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  const quantidade = (array) => {
    let checkerArray = [array[0]];
    let stock = {};
    for (let i = 0; i < array.length; i += 1) {
        !checkerArray.includes(array[i]) && (checkerArray.push(array[i]));
    }
    for (let i = 0; i < checkerArray.length; i += 1) {
        let counter = 0;
        let fruta = checkerArray[i];
        for (let j = 0; j < array.length; j += 1) {
            array[j] === checkerArray[i] && (counter += 1);
        }
        stock[fruta] = counter;
    }
    let cestaArray = Object.entries(stock);
    let cesta = '';
    for (let index = 0; index < cestaArray.length; index += 1) {
        if (index === cestaArray.length - 1){
            cesta += `${cestaArray[index][1]} ${cestaArray[index][0]}s`;
        } else {
        cesta += `${cestaArray[index][1]} ${cestaArray[index][0]}s, `
        }
    }
    let message = `Sua cesta possui: ${cesta}.`;
    return message;
  }

  console.log(quantidade(basket));