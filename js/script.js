// Arrays
const items = [
  {
    id: 1,
    name: 'Master Oogway',
    race: 'Humanoid Animal',
    img: 'https://images.unsplash.com/photo-1571043733612-d5444ff7d4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    type: 'nature',
  },
  {
    id: 2,
    name: 'Hybrid',
    race: 'ManBearPig',
    img: 'https://images.unsplash.com/photo-1571043733612-d5444ff7d4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    type: 'demon',
  },
];

let collection = [];

// Containers

const cardCon = document.querySelector('.cards-container');

const collCon = document.querySelector('.collection-container');

// Renderers

const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
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
      collection.push(items[findIndex(items, item)]);

      console.log(collection);
      renderCollection();
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
        console.log(collection);
      });
  });
};

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

const renderCards = () => {
  cardCon.innerHTML = '';

  items.forEach((item) => {
    cardCon.innerHTML += createCard(item, 'add');
  });

  addListener();
};

renderCards();
