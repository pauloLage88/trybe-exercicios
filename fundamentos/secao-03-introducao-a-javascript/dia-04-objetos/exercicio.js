// Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2018
    ]
}


// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age}`;

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.


const achievment = (name, surname, array) => {
    let counter = 0;
    for (let index = 0; index < array.length; index += 1) {
        counter += 1;
    }
    return `A jogadora ${name} ${surname} foi eleita a melhor do mundo ${counter} vezes.`
}
console.log(message);
console.log(achievment(player['name'], player['lastName'], player['bestInTheWorld']));