
const btn = document.querySelector("#btn")

const createElement = () => {
    const x = document.querySelector('div').style.left = Math.floor(Math.random()*window.innerWidth) + "px"
    const y = document.querySelector('div').style.top = Math.floor(Math.random()*window.innerHeight) + "px"
    
    const c1 = Math.floor(Math.random()*266)
    const c2 = Math.floor(Math.random()*266)
    const c3 = Math.floor(Math.random()*266)
    
    const radius = Math.floor(Math.random()*30) + "px"

    const div = document.createElement("div")
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.position = "absolute"
    div.style.left = x
    div.style.top = y
    div.style.borderRadius = radius
    document.body.appendChild(div)
}

btn.addEventListener("click", ()=>{
    createElement()
})