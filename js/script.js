import { rarityClass, findIndex, containsObject } from './helpers.js';
import { cardCon, collCon } from './constants.js';
// Arrays
const items = [
  {
    id: 1,
    name: 'Master Oogway',
    race: 'Humanoid Animal',
    img: 'https://images.unsplash.com/photo-1571043733612-d5444ff7d4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    type: 'nature',
    rarity: 'Common',
  },
  {
    id: 2,
    name: 'Hybrid',
    race: 'ManBearPig',
    img: 'https://images.unsplash.com/photo-1571043733612-d5444ff7d4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    type: 'demon',
    rarity: 'Uncommon',
  },
];

let collection = [];

const createCard = (item, version) => {
  const { id, name, race, type, img } = item;

  return `
  <div class="card">
  <h2>${name}</h2>
  <h3>${race}</h3>
  <p>${type}</p>
  <button type="button" id="${id}-${version}">yes</button>
  </div>
`;
};

const renderCollection = () => {
  collCon.innerHTML = '';
  collection.forEach((item) => {
    collCon.innerHTML += createCard(item, 'remove');
  });
  removeListener();
};

const addListener = () => {
  items.forEach((item) => {
    document.getElementById(`${item.id}-add`).addEventListener('click', () => {
      if (containsObject(item, collection)) {
        return;
      } else {
        collection.push(items[findIndex(items, item)]);
        renderCollection();
      }
    });
  });
};

const removeListener = () => {
  collection.forEach((item) => {
    document
      .getElementById(`${item.id}-remove`)
      .addEventListener('click', () => {
        collection.splice(findIndex(collection, item), 1);
        renderCollection();
      });
  });
};

const renderCards = () => {
  cardCon.innerHTML = '';

  items.forEach((item) => {
    cardCon.innerHTML += createCard(item, 'add');
  });

  addListener();
};

renderCards();
