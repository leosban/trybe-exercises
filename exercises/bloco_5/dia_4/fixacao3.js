let button = document.getElementById('add-button');
let input = document.getElementById('phrase-input');
let list = document.getElementById('phrases-list');

function addPhraseToLocalStorage() {
  let oldList = JSON.parse(localStorage.getItem('phrases'));
  let phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDom();
};

function insertPhraseInDom() {
  let phrasesList = JSON.parse(localStorage.getItem('phrases'));
  let listLength = phrasesList.length - 1;
  let phraseText = phrasesList[listLength];
  let phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    let phrasesList = JSON.parse(localStorage.getItem('phrases'));
    let listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    };
  };
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function () {
  initialRenderization();
};
