//1
//1-d 2-c 3-a 4-b

//3
//3.1 cannot
//3.2 can

//4
// let li = document.getElementsByTagName("li")

// for(i=0;i<li.length;i++){
//     console.log(li[i])
// }

//5
// let div = document.getElementsByTagName("div")
// console.log(div[2])
// for(i=0;i<div.length;i++){
//     console.log(div[i])
// }

// //8//9//10
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



// //11

// let butt=document.getElementById("upperbttn")
// let name=document.getElementById("name")
// let res=document.getElementById("resultdiv")


// butt.addEventListener('click',function(){
//     res.innerHTML=name.value.toUpperCase()
//     console.log(name.value.toUpperCase())

// })

//12

 window.arr=["Back Pack","Miband Watch","Ring"]

//cách lúc tự học
//     let t=document.getElementById("test")
//     for(i=0;i<arr.length;i++){
//     t.insertAdjacentHTML("beforeend",`<li>${arr[i]}<button class="btton">remove</button</li>`)
// }
//     let text=document.getElementById("txt")
//     let button1=document.getElementById("add")
//     console.log(text)
//     var button=document.getElementsByClassName("btton")
    
    
//     button1.addEventListener('click',function(){
//             arr.push(text.value)
//             t.insertAdjacentHTML("beforeend",`<li>${text.value}<button class="btton">remove</button</li>`)
//             for(i=0;i<button.length;i++){
//                 button[i].addEventListener('click',function(e){
//                     e.preventDefault()
//                     var parent=this.parentElement;
//                     parent.remove();
//                 })
//             }
//     })
    


//cách sau khi học
    console.log(arr)
    window.list = document.getElementById("list")
    var txt = document.getElementById("txt")
    var add = document.getElementById("add")
    console.log(list)

    for(i=0;i<arr.length;i++){
        window.list.insertAdjacentHTML('beforeend',`<li >${arr[i]}<button class="btton" >remove</button</li>`)
    }

    function addIt(){
        console.log(txt.value)
        window.arr.push(txt.value)
        window.list.insertAdjacentHTML('beforeend',`<li >${arr[arr.length-1]}<button class="btton">remove</button</li>`)
        txt.value = ""
        for(i=0;i<window.button.length;i++){
            window.button[i].addEventListener('click',function(e){
                e.target.parentElement.remove();
            })
        }    
    }
    window.button = document.getElementsByClassName("btton")
    console.log(window.button.length)
    for(i=0;i<window.button.length;i++){
        window.button[i].addEventListener('click',function(e){
            e.target.parentElement.remove();
        })
    }    

    






