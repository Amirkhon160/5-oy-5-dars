let body = document.querySelector("body")
let div = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")

let parentBox = document.createElement("div")

let first = document.createElement("h1")
let second = document.createElement("h1")
let third = document.createElement("h1")


let napravleniye = prompt("Napravleniye kiriting: start / center / end")
let rang = prompt("rang kiriting")
let size = +prompt("razmer kiriting")



first.innerHTML = `Hello World`
second.innerHTML = `Assalomu alekum`
third.innerHTML = `Здравствуйте`


parentBox.classList = "ParentBox"
div.classList = "Box"
div2.classList = "Box2"
div3.classList = "Box3"

first.classList = "firstDiv"
second.classList = "secondDiv"
third.classList = "ThirdDiv"


div.style.backgroundColor = `${rang}`
first.style.fontSize = `${size}px`

div2.style.backgroundColor = `${rang}`
second.style.fontSize = `${size}px`


div3.style.backgroundColor = `${rang}`
third.style.fontSize = `${size}px`


parentBox.style.display = "flex"
parentBox.style.justifyContent = `${napravleniye}`
div.appendChild(first)
div2.appendChild(second)
div3.appendChild(third)
parentBox.appendChild(div)
parentBox.appendChild(div2)
parentBox.appendChild(div3)

body.appendChild(parentBox)

console.log(body);
