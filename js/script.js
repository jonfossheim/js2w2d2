import {
  rarityClass,
  findIndex,
  containsObject,
  saveCardArr,
  readCardArr,
  hasImage,
} from './helpers.js';
import { cardCon, collCon, API_URL } from './constants.js';

const localCollection = readCardArr();
const items = [];

if (!localCollection) {
  window.localStorage.setItem('cardArr', JSON.stringify([]));
}

const renderCards = () => {
  cardCon.innerHTML = '';

  items.forEach((item) => {
    cardCon.innerHTML += createCard(item, 'add');
  });

  addListener();
};
const renderCollection = () => {
  collCon.innerHTML = '';
  localCollection.forEach((item) => {
    collCon.innerHTML += createCard(item, 'remove');
  });
  removeListener();
};

async function getCards(url) {
  const response = await fetch(url);
  const resObject = await response.json();

  resObject.cards.forEach((item) => {
    if (hasImage(item)) {
      items.push(item);
    }
  });
  renderCards();
  renderCollection();
}

const createCard = (item, version) => {
  const { id, name, type, rarity, imageUrl } = item;

  let buttonText;
  if (version === 'add') {
    buttonText = 'Add';
  } else {
    buttonText = 'Remove';
  }

  return `
  <div class="card ${rarityClass(rarity)}">
    <img src='${imageUrl}' alt='${name}, ${type}' />
    <h2>${name}</h2>
    <p>${type}</p>
    <button type="button" id="${id}-${version}">${buttonText}</button>
  </div>
`;
};

const addListener = () => {
  items.forEach((item) => {
    document.getElementById(`${item.id}-add`).addEventListener('click', () => {
      if (containsObject(item, localCollection)) {
        return;
      } else {
        localCollection.push(items[findIndex(items, item)]);
        saveCardArr(localCollection);
        renderCollection();
      }
    });
  });
};

const removeListener = () => {
  localCollection.forEach((item) => {
    document
      .getElementById(`${item.id}-remove`)
      .addEventListener('click', () => {
        localCollection.splice(findIndex(localCollection, item), 1);
        saveCardArr(localCollection);
        renderCollection();
      });
  });
};

getCards(API_URL);
