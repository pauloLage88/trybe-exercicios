// Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:

const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

//   Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
const keyValue = (object, index, key) => {
    return object.lessons[index][key];
}

// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const studentsTotal = (object) => {
    let sum = 0;
    for (let index = 0; index < object.lessons.length; index += 1) {
        sum += object.lessons[index].students;
    }
    return sum;
}

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const checkKeys = (object, key) => {
    let check = true;
    for (let index = 0; index < object.lessons.length; index += 1) {
        let arrayKeys = Object.keys(object.lessons[index]);
        if (!arrayKeys.includes(key)) {
            check = false;
        }
    }
    return check;
}

console.log(checkKeys(school, 'shift'));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const changeShift = (object, course, value) => {
    let index;
    for (let i = 0; i < object.lessons.length; i+= 1) {
        let array = Object.values(object.lessons[i]);
        if (array.includes(course)) {
            index = i;
            break
        }
    }
    object.lessons[index].shift = value;
}
