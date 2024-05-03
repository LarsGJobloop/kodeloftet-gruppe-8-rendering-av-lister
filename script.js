import { persons } from './data.js'

function createPersonCard(person) {
    // Genere et html element
    const articleElement = document.createElement("article")

    // Lage alle elementenen
    const firstName = document.createElement("p")
    const age = document.createElement("p")
    const profileLink = document.createElement("a")

    // Legg til innholdet i elementene
    articleElement.className = "person-card"
    firstName.textContent = person.name
    age.textContent = person.age
    profileLink.textContent = "Profile"
    profileLink.href = person.homePage

    // Lagt de til kontaineren
    articleElement.appendChild(firstName)
    articleElement.appendChild(age)
    articleElement.appendChild(profileLink)

    return articleElement
}

// Hvilken data har vi
const lars = {
    name: "Lars G",
    age: 34,
    homePage: "www.github.com/larsg",
}

// Kall funksjonen med persons objekt vårt
const larsElement = createPersonCard(lars)

// Sette inn elementet i dokumentet
// 1. Finn ut hvor vi skal sette elementet inn
const container = document.getElementById("single-person")
// 2. Sett inn det nye elemntet som et under element
container.appendChild(larsElement)


// === Rendring av lister ===
const listElement = document.getElementById("person-list")

for (let index = 0; index < persons.length; index++) {
    console.log(persons[index])
    const newPerson = createPersonCard(persons[index])
    console.log(newPerson)
    listElement.appendChild(newPerson)
}
