var path = 'resources/';
var list = [
  { file: path + "barbie.jpg", liked: false, not_liked: false }, 
  { file: path + "beer.jpg", liked: false, not_liked: false }, 
  { file: path + "belt.jpg", liked: false, not_liked: false }, 
  { file: path + "blue.jpg", liked: false, not_liked: false }, 
  { file: path + "bodybuilding.jpg", liked: false, not_liked: false }, 
  { file: path + "books.jpg", liked: false, not_liked: false }, 
  { file: path + "bra.jpg", liked: false, not_liked: false }, 
  { file: path + "callao.jpg", liked: false, not_liked: false }, 
  { file: path + "car toys.jpg", liked: false, not_liked: false }, 
  { file: path + "city.jpg", liked: false, not_liked: false }, 
  { file: path + "cleaning.jpg", liked: false, not_liked: false }, 
  { file: path + "clouds.jpg", liked: false, not_liked: false }, 
  { file: path + "cocktail.jpg", liked: false, not_liked: false }, 
  { file: path + "cooking.jpg", liked: false, not_liked: false }, 
  { file: path + "couple1.jpg", liked: false, not_liked: false }, 
  { file: path + "couple2.jpg", liked: false, not_liked: false }, 
  { file: path + "cusco.jpg", liked: false, not_liked: false }, 
  { file: path + "dog-toy.jpg", liked: false, not_liked: false }, 
  { file: path + "drag.jpg", liked: false, not_liked: false }, 
  { file: path + "dress.jpg", liked: false, not_liked: false }, 
  { file: path + "flowers.jpg", liked: false, not_liked: false }, 
  { file: path + "fluid.jpg", liked: false, not_liked: false }, 
  { file: path + "gay.jpg", liked: false, not_liked: false }, 
  { file: path + "girl.jpg", liked: false, not_liked: false }, 
  { file: path + "girl2.jpg", liked: false, not_liked: false }, 
  { file: path + "girl3.jpg", liked: false, not_liked: false }, 
  { file: path + "green.jpg", liked: false, not_liked: false }, 
  { file: path + "gun.jpg", liked: false, not_liked: false }, 
  { file: path + "guy.jpg", liked: false, not_liked: false }, 
  { file: path + "guy2.jpg", liked: false, not_liked: false }, 
  { file: path + "guy3.jpg", liked: false, not_liked: false }, 
  { file: path + "guy4.jpg", liked: false, not_liked: false }, 
  { file: path + "guy5.jpg", liked: false, not_liked: false }, 
  { file: path + "guy6.jpg", liked: false, not_liked: false }, 
  { file: path + "hat.jpg", liked: false, not_liked: false }, 
  { file: path + "heels.jpg", liked: false, not_liked: false }, 
  { file: path + "hole.jpg", liked: false, not_liked: false }, 
  { file: path + "homowedding.jpg", liked: false, not_liked: false }, 
  { file: path + "jacket.jpg", liked: false, not_liked: false }, 
  { file: path + "jeans.jpg", liked: false, not_liked: false }, 
  { file: path + "kitchen toy.jpg", liked: false, not_liked: false }, 
  { file: path + "lesbian.jpg", liked: false, not_liked: false }, 
  { file: path + "lights.jpg", liked: false, not_liked: false }, 
  { file: path + "lipstick.jpg", liked: false, not_liked: false }, 
  { file: path + "long-hair.jpg", liked: false, not_liked: false }, 
  { file: path + "man-shoes.jpg", liked: false, not_liked: false }, 
  { file: path + "met.jpg", liked: false, not_liked: false }, 
  { file: path + "moon.jpg", liked: false, not_liked: false }, 
  { file: path + "normcore.jpg", liked: false, not_liked: false }, 
  { file: path + "party.jpg", liked: false, not_liked: false }, 
  { file: path + "pink.jpg", liked: false, not_liked: false }, 
  { file: path + "pinocho.jpg", liked: false, not_liked: false }, 
  { file: path + "purse.jpg", liked: false, not_liked: false }, 
  { file: path + "random.jpg", liked: false, not_liked: false }, 
  { file: path + "religion.jpg", liked: false, not_liked: false }, 
  { file: path + "rings.jpg", liked: false, not_liked: false }, 
  { file: path + "robot-toy.jpg", liked: false, not_liked: false }, 
  { file: path + "shirt.jpg", liked: false, not_liked: false }, 
  { file: path + "short-hair-2.jpg", liked: false, not_liked: false }, 
  { file: path + "short-hair-3.jpg", liked: false, not_liked: false }, 
  { file: path + "short-hair.jpg", liked: false, not_liked: false }, 
  { file: path + "skirt.jpg", liked: false, not_liked: false }, 
  { file: path + "soccer.jpg", liked: false, not_liked: false }, 
  { file: path + "strawberries.jpg", liked: false, not_liked: false }, 
  { file: path + "tomboy.jpg", liked: false, not_liked: false }, 
  { file: path + "trans.jpg", liked: false, not_liked: false }, 
  { file: path + "tree.jpg", liked: false, not_liked: false }, 
  { file: path + "turtle.jpg", liked: false, not_liked: false }, 
  { file: path + "wedding.jpg", liked: false, not_liked: false }, 
  { file: path + "wet-umbrellas.jpg", liked: false, not_liked: false }, 
  { file: path + "yoga.jpg", liked: false, not_liked: false }
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = { getList: function randomize(){
  var rand = shuffle(list);
  return rand.filter(function(pic, i){
    rand[i].index = i;
    return i < 30;
  });
} };