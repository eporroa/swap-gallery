var path = 'resources/';
var list = [
  { file: path + "barbie.jpg" }, 
  { file: path + "beer.jpg" }, 
  { file: path + "belt.jpg" }, 
  { file: path + "blue.jpg" }, 
  { file: path + "bodybuilding.jpg" }, 
  { file: path + "books.jpg" }, 
  { file: path + "bra.jpg" }, 
  { file: path + "callao.jpg" }, 
  { file: path + "car toys.jpg" }, 
  { file: path + "city.jpg" }, 
  { file: path + "cleaning.jpg" }, 
  { file: path + "clouds.jpg" }, 
  { file: path + "cocktail.jpg" }, 
  { file: path + "cooking.jpg" }, 
  { file: path + "couple1.jpg" }, 
  { file: path + "couple2.jpg" }, 
  { file: path + "cusco.jpg" }, 
  { file: path + "dog-toy.jpg" }, 
  { file: path + "drag.jpg" }, 
  { file: path + "dress.jpg" }, 
  { file: path + "flowers.jpg" }, 
  { file: path + "fluid.jpg" }, 
  { file: path + "gay.jpg" }, 
  { file: path + "girl.jpg" }, 
  { file: path + "girl2.jpg" }, 
  { file: path + "girl3.jpg" }, 
  { file: path + "green.jpg" }, 
  { file: path + "gun.jpg" }, 
  { file: path + "guy.jpg" }, 
  { file: path + "guy2.jpg" }, 
  { file: path + "guy3.jpg" }, 
  { file: path + "guy4.jpg" }, 
  { file: path + "guy5.jpg" }, 
  { file: path + "guy6.jpg" }, 
  { file: path + "hat.jpg" }, 
  { file: path + "heels.jpg" }, 
  { file: path + "hole.jpg" }, 
  { file: path + "homowedding.jpg" }, 
  { file: path + "jacket.jpg" }, 
  { file: path + "jeans.jpg" }, 
  { file: path + "kitchen toy.jpg" }, 
  { file: path + "lesbian.jpg" }, 
  { file: path + "lights.jpg" }, 
  { file: path + "lipstick.jpg" }, 
  { file: path + "long-hair.jpg" }, 
  { file: path + "man-shoes.jpg" }, 
  { file: path + "met.jpg" }, 
  { file: path + "moon.jpg" }, 
  { file: path + "normcore.jpg" }, 
  { file: path + "party.jpg" }, 
  { file: path + "pink.jpg" }, 
  { file: path + "pinocho.jpg" }, 
  { file: path + "purse.jpg" }, 
  { file: path + "random.jpg" }, 
  { file: path + "religion.jpg" }, 
  { file: path + "rings.jpg" }, 
  { file: path + "robot-toy.jpg" }, 
  { file: path + "shirt.jpg" }, 
  { file: path + "short-hair-2.jpg" }, 
  { file: path + "short-hair-3.jpg" }, 
  { file: path + "short-hair.jpg" }, 
  { file: path + "skirt.jpg" }, 
  { file: path + "soccer.jpg" }, 
  { file: path + "strawberries.jpg" }, 
  { file: path + "tomboy.jpg" }, 
  { file: path + "trans.jpg" }, 
  { file: path + "tree.jpg" }, 
  { file: path + "turtle.jpg" }, 
  { file: path + "wedding.jpg" }, 
  { file: path + "wet-umbrellas.jpg" }, 
  { file: path + "yoga.jpg" }
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

module.exports = { 
  getList: function randomize(){
    var rand = shuffle(list);
    return rand.filter(function(pic, i){
      rand[i].index = i;
      return i < 30;
    });
  }
};