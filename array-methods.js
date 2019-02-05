const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planetEl.innerHTML += `
 <h1>Planets:</h1>
 `
planets.forEach(planet => {
    planetEl.innerHTML += `
    <section>
    <h4>${planet}</h4>
    </section>
    `

})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

    */
const upperCasePlanets = planets.map((planet => {
    return planet.charAt(0).toUpperCase()+ planet.slice(1)
}
    ))

    console.log(upperCasePlanets)

const upperPlanetEl = document.getElementById("planets2")
upperPlanetEl.innerHTML = `
<section>
<h1>Upper Case Planets</h1>
</section>
`
upperCasePlanets.forEach(planet => {
    upperPlanetEl.innerHTML += `
    <section>
    <h4>${planet}</h4>
    </section>
    `
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const outputEl = document.getElementById("planets3")
outputEl.innerHTML = `<h1>Planets With Letter E:</h1>`

const planetsContainingE = planets.filter(planet => {

    if (planet.includes("e")) {
        return planet

    }
})

planetsContainingE.forEach(planet => {
    outputEl.innerHTML +=`
    <section>
    <h4>${planet}</h4>
    </section>
    `
})

