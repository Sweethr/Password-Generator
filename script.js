let slider = document.querySelector("#lengthNumber")
slider.addEventListener("input", () => {
    document.getElementById("lengthOutput").innerText = `${slider.value}`
})

const onClick = () => {
    let settings = {}

    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox.forEach((c) => {
        settings[c.name] = c.checked
    })

    let passwordLength = document.getElementById("lengthNumber").value
    let randomPassword = randomCharacter(passwordLength, settings)
    document.getElementById("output").innerText = randomPassword
}

const randomCharacter = (length, settings) => {
    let output = ""

    let allCharacters = "",
        characters = "qwertyuıopasdfghjklizxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        numbers = "1234567890",
        special = "#$&-_?()=!'^+%&"

    if (!settings.harf && !settings.sayı && !settings.ozelkarakter) return output = "Select the following options"
    if (settings.harf) allCharacters += characters
    if (settings.sayı) allCharacters += numbers
    if (settings.ozelkarakter) allCharacters += special

    for (let i = 0; i < length; i++) {
        output += `${allCharacters[Math.floor(Math.random() * allCharacters.length)]}`
    }

    return output
}