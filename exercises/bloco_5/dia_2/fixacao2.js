// Crie um irmão para elementoOndeVoceEsta .
let elemento_pai = document.querySelector('#elementoOndeVoceEsta').parentElement;
let irmaoElemento = document.createElement('div');
irmaoElemento.id = 'irmaoElementoOndeVoceEsta';
elemento_pai.appendChild(irmaoElemento);

// Crie um filho para elementoOndeVoceEsta .
let paiOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoElemento = document.createElement ('p');
filhoElemento.id = 'filhoElemento';
filhoElemento.textContent = 'Este é o filho do elemento onde você está';
paiOndeVoceEsta.appendChild(filhoElemento);


// Crie um filho para primeiroFilhoDoFilho .
let paiFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilhoDoFilho = document.createElement ('p');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';
filhoDoFilhoDoFilho.textContent = 'Este é o filho do primeiro filho do filho';
paiFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
document.querySelector('#filhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling;