// Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver : 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log(player.name, player.lastName, player.age);

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log(player['bestInTheWorld']);