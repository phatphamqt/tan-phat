
let heading1=document.getElementById('h1')

heading1.href="http://facebook.com"

let ul=document.getElementById("li")

let li="<li>Ronaldo</li><li>Messi</li><li id='nm'>Neymar</li>"

ul.innerHTML +=li

nm=document.getElementById("nm")

nm.remove()


ul.addEventListener('click',function(){
    console.log("clicked")
})

let bt=document.getElementById("button")

bt.addEventListener('click', function(){
    let add=prompt("enter player name")
    console.log(add)
    ul.insertAdjacentHTML('beforeend',`<li>${add}</li>`)
})


let ip=document.getElementById("my-input")

let newplayer=[]
ip.addEventListener('keypress', function(data){
    console.log(data)
    let enter=13
    if(data.keyCode!=13){
        newplayer.push(data.key)
    }
    else{
        return ul.insertAdjacentHTML('beforeend',`<li>${newplayer.join("")}</li>`)
    }
})

=

