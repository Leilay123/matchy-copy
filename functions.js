/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: Function "search"  should taje a parameter 'animals (which is a array) and a string (the name of the animal)
 * O: Function should return 'animal' object if the name match, return null if the name doesn't exist
 * C: Need to go through all the animal objects to find the name
 * E:
 */

function search (animals, string){
    for (var i = 0; i < animals.length; i++){
        if (string === animals[i].name){
            return animals[i]
            
        }
    }
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: Function 'replace' take 3 parameters, (array of animals, string which is name, object which is the replcement)
 * O: Of an animal with that name exist, replace the object with another the replacement obhect
 * otherwise, do nothing
 * C:
 * E:
 */

function replace (animal, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            return animal[i] = replacement
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: Function 'remove' take 2 paramneters (animal array and name)
 * O: if animal w/ name exist, remove it
 * C:
 * E:
 */

function remove (animals, name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
             animals.splice(i, 1)
             //do break also work on if statments? It works for switches
             break
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: Function 'add' should take 2 parameters (array of animals, and objecy which is new animal) 
 * function shuld check if animal object have a name length > 0
 * Check if species have a length > 0
 * Have a unique name
 * O: return a new object to the animals array if everything passes
 * C:
 * E:
 */

function add (animals, animal){
    if (animal.name.length > 0 && animal.species.length > 0){
        for (var i = 0; i < animals.length; i ++){
            if (animals[i].name === animal.name){
                return
            }
        }
        animals.push(animal)
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}