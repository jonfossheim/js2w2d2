export async function getCards(url, resCon) {
  const response = await fetch(url);
  console.log(response);
  const resObject = await response.json();
  console.log(resObject.cards);
  //resCon.innerHTML = '';

  for (let i = 0; i < resObject.cards.length; i++) {
    //console.log(resObject.cards[i]);
    if (i === 10) {
      break;
    }

    //resCon.innerHTML += `<div class="result">${cards[i].name}</div>`;
  }
}
