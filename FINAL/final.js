// //A
// //1

// function findOppositeNumber(n,inputNumber){
//     if(n>=4 && n <=20){
//         if(inputNumber<n/2){
//             console.log((n/2)+inputNumber)
//         } else{
//             console.log(inputNumber-(n/2))
//         }
        
//     }
// }

// findOppositeNumber(10,8)

// //2

// function mergeString(string1,string2){
//     let arr1=string1.split("")
//     let arr2=string2.split("")
//     console.log(arr1)
//     console.log(arr2)
//     let arr3=[]
//     if(arr1.length>=arr2.length){
//         for(let i=0;i<arr1.length;i++){
//             arr3.push(arr1[i],arr2[i])
//         }
//     } else {
//         for(let j=0;j<arr1.length;j++){
//             arr3.push(arr1[j],arr2[j])
//         }
//         for(let k=arr1.length;k<arr2.length;k++){
//             arr3.push(arr2[k])
//         }
//     }
//     console.log(arr3.join(""))
// }

// mergeString("abcd","012")

//B

let text = document.getElementById("text")
let green = document.getElementById("green")
let randomNumber = Math.floor(Math.random()*10);
console.log(randomNumber)
let click=0

green.addEventListener('click',function(){
    if(text.value==randomNumber){
        alert("Bạn đã chọn đúng số may mắn: "+randomNumber)
    } else{
        click += 1
        if((3-click)>0){
            alert("Bạn đã chọn sai, bạn còn "+ (3-click) +" lần chọn")
        } if((3-click)==0){
            alert("Bạn đã hết lượt, con số may mắn là: "+ randomNumber)
            green.disabled = true ;
        }
    }
})
