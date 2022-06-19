const characterBar = document.getElementById("character-bar")
const baseUrl = "http://localhost:3000/characters"

fetch(baseUrl)
    .then(response => response.json())
    .then(jsonData => {
        const voteCount = document.getElementById("vote-count")
        voteCount.innerText = '0';

        const form = document.getElementById("votes-form")
        form.addEventListener('submit', e => {
            e.preventDefault()
            const input = document.getElementById("votes")

            voteCount.innerText = parseInt(voteCount.innerText, 10) + parseInt(input.value)
            input.value = ""
        })
        const reset = document.getElementById("reset-btn")
        reset.addEventListener("click", () => {
            voteCount.innerText = '0'
        })
        const name = document.getElementById("name")
        const image = document.querySelector("img")

        name.innerText=jsonData[0].name
        image.src=jsonData[0].image

        jsonData.forEach(character => {
            const nameH2 = document.createElement("h2")
            nameH2.innerText = character.name
            characterBar.append(nameH2)


            nameH2.addEventListener('click', () => {
                voteCount.textContent = '0'
                name.textContent = character.name
                image.src = character.image
            })
        })

    })
