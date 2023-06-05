const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };

//   Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.

const addProperty = (object, key, value) => {
    typeof object[key] === 'undefined' && (object[key] = value);
}

addProperty(customer, 'email', 'roberto@gmail.com');
addProperty(customer, 'fone', '999999999');
addProperty(customer, 'userGitHub', 'robertoGit');
addProperty(customer, 'linkedIn', 'roberto');

console.log(customer);
