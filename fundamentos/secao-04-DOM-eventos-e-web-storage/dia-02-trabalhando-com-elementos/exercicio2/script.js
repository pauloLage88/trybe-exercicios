// Crie um irmão para elementoOndeVoceEsta
const irmao = document.createElement('section');
const pai = document.getElementById('pai');
pai.appendChild(irmao);

// Crie um filho para elementoOndeVoceEsta.
const filho = document.createElement('section');
const ondeEstou = document.getElementById('elementoOndeVoceEsta');
ondeEstou.appendChild(filho);

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filho);

// A partir desse filho criado, acesse terceiroFilho.
const filhoCriado = primeiroFilhoDoFilho.firstChild;
console.log(filhoCriado.parentNode.parentNode.nextElementSibling);
