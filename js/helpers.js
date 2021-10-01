const cardArr = JSON.parse(window.localStorage.getItem('cardArr'));

export const rarityClass = (rarity) => {
  switch (rarity) {
    case 'Common':
      return 'common';
    case 'Uncommon':
      return 'uncommon';
    case 'Rare':
      return 'rare';
    case 'Legendary':
      return 'legendary';
    default:
      return '';
  }
};

export const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};

export const containsObject = (obj, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }
  return false;
};

export const saveCardArr = (array) => {
  window.localStorage.setItem('cardArr', JSON.stringify(array));
  console.log('save cardArr', cardArr);
};

export const readCardArr = () => {
  console.log(cardArr);
  return cardArr;
};

export const hasImage = (object) => {
  if (object.imageUrl) {
    return true;
  }
  return false;
};
