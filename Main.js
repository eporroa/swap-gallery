var Pictures = require('PictureList');
var Observable = require("FuseJS/Observable");
var Timer = require("FuseJS/Timer");
var CardsArr = Pictures.getList();
var Cards = Observable();
var currentCardIndex = 0;
var nextCardIndex = Observable(1);

function setUpCards(card){
  card.liked = false;
  card.not_liked = false;
  return card;
}

function refreshCards(card){
  Cards.removeAt(0);
  currentCardIndex = card.index + 1;

  if(CardsArr[currentCardIndex]){
    Cards.add(CardsArr[currentCardIndex]);
    Timer.create(incrementNextCard.bind(this), 200, false);
  }
}

function incrementNextCard(){
  nextCardIndex.value = currentCardIndex + 1;
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

Cards.add(CardsArr[currentCardIndex]);

module.exports = {
  handleLiked,
  handleNotLiked,
  isLiked,
  notLiked,
  CardsArr,
  nextCardIndex,
  Cards
};