const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ["red", "black", "grey", "blue"]
button.addEventListener("click", changeB)

function changeB() {
    const colorindex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorindex]
}