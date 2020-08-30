//1
// let n=Number(prompt("nhap so n:"))
// let star="*"
// while(star.length<=n){
//     console.log(star)
//     star=star+"*"
// }
//1
let n=prompt("nhap so n:")
let ketqua="*"
for(let i =0;i<=n-1;i++){
    console.log(ketqua)
    ketqua += "*"
}

//2
// let n=100
// for(i=1;i<n;i++){   
//  if(i % 5 == 0 && i % 3 == 0) {
//     console.log( "FizzBuzz")
// }else if(i % 5 == 0 && i % 3 != 0){
//     console.log( "Buzz")
// }else if(i % 3 == 0){
//     console.log( "Fizz")
// }else{
//     console.log(i)
// }
// }

//3a
// let numb =prompt("nhap vao so can kiem tra:")
// if (numb>3){ 
// if(numb%2!=0 && numb%3!=0){
//     console.log(`${numb} la so nguyen to`)
// } else if (numb%2 ==0 || numb%3 ==0){
//     console.log(`${numb} khong phai la so nguyen to`)
// }
// }
// else if(numb>1 && numb<4){
//     console.log(`${numb} la so nguyen to`) } 
// else {
//     console.log(`${numb} khong phai la so nguyen to`)
// }   

//3b
// let inputn =prompt("nhap vao so n:")
// let flat = false
// while (flat!=true ){
//     alert("n phai la so nguyen lon hon 1")
//     inputn=prompt("nhap lai so n:")
//     if(inputn>1){
//         break
//     };
// }
// if(inputn>2){ 
//     console.log(2)
//     console.log(3)
// for(i=3;i<=inputn;i++){ 
//     if(i%2!=0 && i%3!=0){
//         console.log(i)
//     }
// }
// }else if(inputn>1){
//     console.log(2)
// for(i=2;i<=inputn;i++){
//     if(i%2!=0 && i%3!=0){
//         console.log(i)
//     }
// }
// }else {
//     console.log("n phai lon hon 1")
// }

//3b
// let n=prompt("nhap n:")
// let count=0
// for(let i=2;i<=n;i++){
//     for(let j=2;j<=i;j++){
//     if(i%j==0){
//         count++
//     }
//     }
//     if(count==0){
//         console.log(i)
//         count=0
//     }
// } { count=0}


//4a tinh tong so chan so le tu 1-100
//  let tongchan=0
// for(i=1;i<101;i++){
//     if(i%2 == 0){
//     tongchan += i
//     }
// } 
// console.log("Tong so chan la" + tongchan)
//  let tongle=0
//  for(i=1;i<101;i++){
//      if(i%2 != 0){
//          tongle +=i
//      }
//  }
// console.log("Tong so le la" + tongle)


//5
let a=prompt("nhap a:")
while (a==0){
    alert("a phai la so khac 0")
    a=prompt("nhap lai a:")
    if(a>0){
        break
    }
}
let b=prompt("nhap b:")
let c=prompt("nhap c:")
var x1,x2;
let delta=(b*b)-4*a*c
let sqrtdelta=Math.sqrt(delta)
let sum1=a+b+c
let sum2=a-b+c

if(delta>0 && sum1==0){
    console.log("x1 = 1"+ "x2 ="+ c/a )
}else if(delta>0 && sum2==0){
    console.log("x1 =-1"+ "x2 ="+ -c/a)
}else if(delta<0){
    console.log("delta ="+ delta)
    console.log("phuong trinh vo nghiem")
}else if(delta==0){
    console.log("delta ="+ delta)
    console.log("phuong trinh co nghiem kep x1=x2="+ ((-b)/(2*a)))
}else if(delta > 0){
    console.log("delta ="+ delta)
    console.log("phuong trinh co 2 nghiem phan biet"+ "x1=" + ((-b+sqrtdelta)/2*a) 
    + "x2="+ ((-b-sqrtdelta)/2*a))
}