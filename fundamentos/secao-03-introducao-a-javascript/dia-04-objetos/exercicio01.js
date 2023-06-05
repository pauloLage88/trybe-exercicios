const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

//   Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

console.log(`O livro favorito de Julia Pessoa se chama '${reader.favoriteBooks[0].title}'.`);

// Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

// {
//     title: 'Harry Potter e o Prisioneiro de Azkaban',
//     author: 'JK Rowling',
//     publisher: 'Rocco',
//   }

reader.favoriteBooks.push({
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  });

  console.log(reader);

//Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

// “Julia tem {quantidade} livros favoritos.”

// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

// “Julia tem 1 livro favorito.”

const counterBooks = (object) => {
    let counter = 0;
    for (let index = 0; index < object.favoriteBooks.length; index += 1) {
        counter += 1;
    }
    let message = '';
    counter === 1 ? message = `Julia tem 1 livro(s) favorito(s).` : message = `Julia tem ${counter} livro(s) favorito(s).`;
    return message;
}

console.log(counterBooks(reader));

