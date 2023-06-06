const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

function splitSentence(string) {
  let words = string.split(' ');
  console.log(words);
  return words;
}

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  console.log(points);
  return points;
}

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  playlist.push({ artist: artistName, music: musicName, musicTime });
  return playlist;
}

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let biggerPrice = data[category][0].price;
  let productName = '';
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].price >= biggerPrice) {
      biggerPrice = data[category][i].price;
      productName = data[category][i].name;
    }
  }
  return `O produto mais caro é: ${productName}, que custa: R$${biggerPrice.toFixed(2)}.`;
}

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  let check = false;
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name === item) {
      check = true;
    }
  }
  return check;
}

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
function addNewItem(data, category, item, price, ingredients, calories) {
  let index = 0;
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name === item) {
      return `O produto: "${item}" já existe!`;
    }
    index = i + 1;
  }
  return data[category][index] = { name: item, price, ingredients, calories };
}

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(data) {
  let counterMale = 0;
  let counterFemale = 0;
  for (let index = 0; index < data.guests.length; index += 1) {
    let item = data.guests[index];
    let values = Object.values(item);
    if (values.includes('male')) {
      counterMale += 1;
    } else {
      counterFemale += 1;
    }
  }
  return { male: counterMale, female: counterFemale };
}
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState(data, state) {
  let address = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    let checker = Object.values(data.guests[index].address);
    checker.includes(state) && address.push(data.guests[index]);
  }
  return address;
}

// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data, link) => {
  let array = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    data.guests[index].picture = link;
    array.push(data.guests[index]);
  }
  return array;
};
// Requisito 10 - Crie um função que gera um relatório

const generateReport = (data) => {
  let totalGuests = 0;
  let countries = [data.guests[0].country];
  let sum = 0;
  for (let index = 0; index < data.guests.length; index += 1) {
    totalGuests += 1;
    sum += data.guests[index].age;
    !countries.includes(data.guests[index].country) && countries.push(data.guests[index].country);
  }
  countries = countries.sort();
  let avgAge = Math.round((sum / totalGuests) * 100) / 100;
  let report = { totalGuests, totalGender: counterGender(data), avgAge, countries };
  return report;
};
// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
