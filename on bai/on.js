
//bat chuot

// function catchmouse(cat1,mouse,cat2){
//     const arr =[cat1,mouse,cat2]

//    console.log(arr)
//     if(arr[0]<arr[1]){
//         window.move1 = []
//         for( let i =arr[0];i<=arr[1];i++){
//             console.log(i)
//             window.move1.push(i)
//         }
//         console.log(window.move1)
//     } else {
//         window.move1 = []
//         for( let k =arr[0];k>=arr[1];k--){    
//             console.log(k)
//             window.move1.push(k)
//         }
//         console.log(window.move1)
//     }
//     if(arr[2]<arr[1]){
//         window.move2 = []
//         for( let j =arr[2];j<=arr[1];j++){
//             console.log(j) 
//             window.move2.push(j) 
//         }
//         console.log(window.move2)
//     } else {
//         window.move2 = []
//         for( let l =arr[2];l>=arr[1];l--){
//             console.log(l)     
//             window.move2.push(l) 
//         }
//         console.log(window.move2)
//     }
//     let meo1 = window.move1.length
//     let meo2 = window.move2.length
//     console.log( meo1,meo2)
//     if( window.move1>window.move2){
//         console.log("meo 2 bat chuot")
//     } else if (window.move2>window.move1) {
//         console.log("meo 1 bat chuot")
//     } else {
//         console.log("chuot chay mat tieu!")
//     }
// }

// catchmouse(-1,-5,1)



//
// let arr2=[[10,0,2],[20,12,2],[10,1,3]]
// function radar(arr){
//     console.log(arr)
//     for(let i =0;i<arr.length;i++){
//         window.f1=[]
//         window.f2=[]
//         if(arr[i].indexOf(0)!=-1){
//             console.log("F1 is: "+ arr[i])
//             for(ii=0;ii<arr[i].length;ii++){
//                 let am = arr[i]
//                 window.f1.push(am[ii])
//             }
//             window.f1.splice(window.f1.indexOf(0),1)
//             console.log(window.f1)
//             arr.splice(i,1)
//             console.log(arr)
//             for( let j=0;j<arr.length;j++){
//                 for( let jj=0;jj<window.f1.length;jj++){
//                     if(arr[j].indexOf(window.f1[jj])!=-1){
//                         let em=arr[j].indexOf(window.f1[jj])
//                         console.log(arr[j].indexOf(em))
//                         let emm = arr[j].indexOf(em)
//                         arr[j].splice(emm,1)
//                         console.log("F2 is: "+arr[j])
//                     }
//                 }
//             }

        
//         }
    
//     }
// }
// radar(arr2)

//socks

// let socks = [1,2,3,1,2,4,3]
// let sizes = [1,2,3,4]

// function sort(socks,sizes){
//     window.final =[]
//     for(let i = 0; i<sizes.length;i++){
//         window.stock =[]
//         for(ii = 0; ii<socks.length;ii++){
//             if(socks[ii]==sizes[i]){
//                 window.stock.push(socks[ii])
//             }
//         }
//         console.log(window.stock)
//         if(window.stock.length>1){
//             window.final.push(1)
//         } else{
//             window.final.push(0)
//         }
//     }
//     console.log(window.final)
// }

// sort(socks,sizes)

