//3 cach doc content trong the innerHTML,textContent, 

// let num=document.getElementById("so")
// let minus=document.getElementById("tru")
// let plus=document.getElementById("cong")
// minus.addEventListener('click',function(){
//     num.textContent=num.textContent-1
// })

// function up(){
//     num.textContent=Number(num.textContent)+1
// }

// function dis(){
//     var pic=document.getElementById("pic")
//     pic.style.display="none"
// }
// console.log(pic)

// // function border(){
// //     pic.style.border="5px solid black"
// // }

// function cat(){
//     console.log(pic)
//     pic.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR63lEyJerJUsVkakjluH_4Iex5LPMkJrkpPw&usqp=CAU"

// }

// function dog(){
//     pic.src="https://i.pinimg.com/originals/a1/24/19/a1241985c15edffc1dc0b43a6252cea5.jpg"
// }
var num = document.getElementById("num")
var so= document.getElementById("hello")
// var x = setInterval(function(){},1000)
function batdau(){
    so.innerHTML=num.value
    window.x = setInterval(function(){
        so.innerHTML = so.innerHTML -1
        if(so.innerHTML < 1){
            clearInterval(x)
        }
    },1000)
}

function dunglai(){
    clearInterval(window.x);
}

