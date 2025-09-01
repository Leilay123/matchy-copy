/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'dog'

animal['name'] = 'Zen'

animal.noises = []

console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []

noises[0] = 'Woof'

noises.push('Bark')

noises.unshift('Bork')

noises.splice(0, 0, "Snorf")

console.log(noises.length)

console.log(noises.length - 1)

console.log(noises)

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises

animal.noises.push("howllooo")

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * By using dot notation (example: obj.thing) or bracket notation (example: obj['thing'])
 *
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * By using bracket notation (example: array[0])to get the index or using array methods (like .push, .pop, .shift, etc)
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []

animals.push(animal)

// console.log(animal)

var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}

animals.push(duck)

// console.log(animals)

var cat = {
  species: 'cat',
  name: 'Biscuit',
  noises: ['Meow', 'Nya', 'Nyaahhoaa']
}

var fish = {
  species: 'fish',
  name: "Bubbles",
  noises: ['Blub Blub', 'Glub', 'Buhb Buhb']
}

animals.push(cat)

animals.push(fish)

// console.log(animals)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/**
 * I: create a data stucture for the Friends variable (should hold list),
 * create a function called getRandom that takes 'animals' array as a parameter,
 * O: getRandom should return a random index from the animals array
 * C: use Math.random()
 * E:
 */
var friends = []

//I choose an array because arrays are good for holding a list of similar indexes

function getRandom (animals){
  return Math.floor(Math.random() * animals.length) 
}
// when in doubt, create a var that hold info

var nameRandom = getRandom(animals)

friends.push(animals[nameRandom].name)

// console.log(friends)

// animals[0]['friends'] = friends

// console.log(animals)

console.log(nameRandom)

console.log(friends)


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}