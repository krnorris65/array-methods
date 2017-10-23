const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet to a section element in your HTML with an id of "planets". Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(function(planet) {
    //takes each planet and inserts it into the DOM with a space between
    planetEl.innerHTML += planet + " "

})

/*
    Use the map method to create a new array where the first letter of each planet is capitalized. Use the `toUpperCase()` method on strings.
*/
const mapPlanets = planets.map(function(planet) {
    //slices the first letter of each planet and capitalizes it and then adds the remainder of the word (plus a space)
    return planet.slice(0, 1).toUpperCase() + planet.slice(1) 
}) 

console.log("mapped planets", mapPlanets)

/*
    Use the filter method to create a new array that contains planets with the letter 'e'. Use the `includes()` method on strings.
*/
const filteredPlanets = planets.filter(function(planet) {
    // only captures planets that include the letter 'e' in them
    return planet.includes("e")
})

console.log("filtered planets", filteredPlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(function(currentSentence, nextWord) {
    //takes the current sentence string adds a space and then the next word until the last word is added
    return currentSentence + " " + nextWord
})

console.log(sentence)