var Pictures = require('PictureList');
var Observable = require("FuseJS/Observable");
var RandomCardsSet = Pictures.getList();
var CardsArr = [];
var Cards = Observable();
var cardsAvailableLeft = 0;
var currentCardIndex = 0;

/*CardsArr.onValueChanged(module, function(card){
  if (!card) return;
  debug_log("changed " + JSON.stringify(card));
  //card.active = true;
});*/
//debug_log("changed " + JSON.stringify(RandomCardsSet));

function placeCards(quant) {
  CardsArr = CardsArr.concat(RandomCardsSet.splice(0, quant).map(setUpCards));
}

function setUpCards(card){
  card.active = false;
  card.liked = false;
  card.not_liked = false;
  return card;
}

function refreshCards(card){
  if(!card.active) return;

  Cards.removeAt(0);
  debug_log(card.index);

  currentCardIndex = card.index + 1;
  if(CardsArr[currentCardIndex]){
    Cards.add(Object.assign(CardsArr[currentCardIndex], { active: true }));
  }

  /*Cards.replaceAt(card.index, card)
  var nextCard = CardsArr[currentCardIndex + 1];
  if (nextCard) {
    nextCard.active = true;
    Cards.replaceAt(nextCard.index, nextCard);
    currentCardIndex++;
  }

  debug_log("new: " + JSON.stringify(CardsArr));
  */
  /*Cards.forEach(function(c, i){
    debug_log("Cards " + i);
    c.index = i;
    if(i === 0) {
      c.active = true;
    }
    return c;
  });*/
  //Cards.replaceAll();

  //var nextCard = Cards.getAt(0);
  /*if(nextCard) {
    nextCard.active = true;
    //Cards.replaceAt(nextCard.index, nextCard);
    debug_log("new: " + JSON.stringify(Cards.getAt(0)));
  }*/


  /*if (currentCounter <= 2) {
    RandomCardsSet.splice(0, 3).map(setUpCards);
    if (RandomCardsSet.length === 0){
      debug_log("Finalizado");
    } else {
      currentCounter += 3;
    }
  }
  currentCounter--;*/
}

function isLiked(e) {
  debug_log("isLiked");
  e.data.liked = true;
  refreshCards(e.data);
}

function notLiked(e) {
  debug_log("notLiked");
  e.data.not_liked = true;
  refreshCards(e.data);
}

function handleLiked() {
  Cards.replaceAt(0, Object.assign(CardsArr[currentCardIndex], { liked: true }));
}

function handleNotLiked() {
  Cards.replaceAt(0, Object.assign(CardsArr[currentCardIndex], { not_liked: true }));
}

placeCards(30);
Cards.add(Object.assign(CardsArr[currentCardIndex], { active: true }));

debug_log("----");

module.exports = {
  handleLiked,
  handleNotLiked,
  isLiked,
  notLiked,
  CardsArr,
  Cards
};