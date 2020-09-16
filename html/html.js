
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
//8//9//10
// let myfunction=function(name,wish){
//     if(wish.length>0){
//         alert("Your name is "+ name+"\n"+ "Your wish is to "+wish +" this year.")
//     }
    
//     else if(wish.length==0){
//         alert("Your name is "+ name+"\n"+"and you are helpless.")
//     }
// }

// let username=prompt("user's name: ")
// let wishes=[]
// for(i=1;i<4;i++){
//     let wish=prompt("your wish: ")
//     wishes.push(wish)
// }
// let rdwish=Math.floor(Math.random()*wishes.length)
// myfunction(username,wishes[rdwish])



//11

let butt=document.getElementById("upperbttn")
let name=document.getElementById("name")
let res=document.getElementById("resultdiv")


butt.addEventListener('click',function(){
    res.innerHTML=name.value.toUpperCase()
    console.log(name.value.toUpperCase())

})

