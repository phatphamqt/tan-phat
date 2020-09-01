//1
let a=5
let b=6
// let temp
// temp=a
// a=b
// b=temp
//1.2
// a=[b,b=a][0]
//1.3
// a=a+b
// b=a-b
// a=a-b


//4
// let item=["t-shirt","sweater","pant","pullover","jacket","jean","suit","shoes"]
// function cret(){ 
// let user=prompt("what you want to do? C R U D")

// if(user=="r"){
//     console.log(item)
// }
//  if (user=="c"){
//     let create= confirm("Do you want to create new item?")
//     while(create==true){
//         let citem=prompt("Enter item here:")
//         item.push(citem)
//         console.log(item)
//         user=prompt("what you want to do next? C R U D")
//         break;
//     }
// }
// if(user=="u"){
//     for(i=0;i<item.length;i++){
//         console.log(i,item[i])
//     }
//     let update=prompt("what item you want to update? 1 2 3 4")
//     console.log(item[update])
//     let uitem=prompt("Enter new item:")
//     item[update]=uitem
//     console.log(item)
// }
// if(user=="d"){
//     for(i=0;i<item.length;i++){
//         console.log(i,item[i])
//     }
//     let del=prompt("what do you want to delete? 1 2 3 4")
//     console.log(item[del])
//     let conf=confirm(`Do you want to delete item ${item[del]} ?`)
//     while(conf==true){
//         item.splice(del,1);
//         console.log(item)
//         break;
//     }
// }
// cret()
// }
// cret()

//5
// let seNumb=prompt("enter sequence of numbers to sum, seperate by commas(,)")

// let arr=seNumb.split(",")

// console.log(arr)
// let sum=0
// for(a in arr){
//     arr[a]=parseInt(arr[a],10)
// }
// console.log(arr)
// for(i=0;i<arr.length;i++){
// sum+=arr[i]
//  console.log(sum)   
// }alert(`the sum of them is ${sum}`)


//6
// let numb=prompt("enter sequence of numbers seperated by a commas(,) to find the smallest one")
// let arr=numb.split(",")
// console.log(arr)
// for(a in arr){
//     arr[a]=parseInt(arr[a],10)
// }
// console.log(arr)
// arr.sort(function(a,b){
//     return a - b;
// })
// console.log(arr)
// alert(`the smallest number is ${arr[0]}`)

//7
// const arr=[1,2,3,4,5,7]
// let n;
// while(true){
//     n=Number(prompt("enter a number to find out if it is in the array:"))
//     if(n){
//         break;
//     }
// }
// console.log(n)

// if(arr.indexOf(n)===-1){
//     alert(`${n} is NOT FOUND in my array `)
// }
// else if(arr.indexOf(n)>-1){
//     alert(`${n} is FOUND in my array at index ${arr.indexOf(n)}`)
// }


//8
//8.1
let flock = [5,7,300,90,24,50,75]
console.log("hello my name is Phat and here is my sheep size:" + flock)

month=1

//8.2
// flock.sort(function(a,b){return a - b})
// console.log(flock)

// console.log("now my biggest sheep has size " + flock[6] + ", let shave it")

// flock[6]=8
// console.log(flock[6])
// console.log(flock)
// for(i=0;i<flock.length;i++){
//     flock[i] += 50
// }console.log(flock)


//8.2
// let myfunction= function(){ 
// let max=flock.reduce(function(a,b){
//     return Math.max(a,b)
// })
// console.log("now my biggest sheep has size " + max + ",lets shave it")

// let newmax=flock.indexOf(max)
// console.log(newmax)
// flock[newmax]=8
// console.log("after shaving, here is my flock" + flock)

// for(i=0;i<flock.length;i++){
//     flock[i] += 50
// } console.log("Month " + (month++) + " one month has past, my sheeps have grown, here is their size:" + flock)
// }
// myfunction()

// myfunction()

// myfunction()

// console.log(flock)
// let total=0
// for(a in flock){
//     flock[a]=parseInt(flock[a])
// }
// for(i=0;i<flock.length;i++){
//     total += flock[i]
// }
// console.log("my flock has size in total:" + total)
// value=total*2
// console.log("I would get " + total + " * 2$ " + "= " + value + "$")

//10
//for
//name[i]="<"+name[i]+">"


//10.2

// let str=prompt("Enter sequence of names, seperate by commas(,):")

// let arr=str.split(",")
// console.log(arr)

// newarr=arr.map(x => "<"+x+">")

// console.log(newarr)

// console.log("<"+arr+">")

//11.1

// let str=prompt("enter sequence of number, separated by a commas(,):")

// let arr=str.split(",")
// console.log(arr)

// let odd=[]

// for(i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         odd.push(arr[i])
//     }
// }console.log(odd)

//11.1.2
// let result=[]
// count=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){

//     }
// }


//11.2
// let str=prompt("enter sequence of number, separated by a commas(,):")

// let arr=str.split(",")
// console.log(arr)

// let odd=arr.filter(x => x%2!=0)

// console.log(odd)