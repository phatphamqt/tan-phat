//1
// function removedollarsign(text){
    // let newtext=text.split("")
    // for(i=0;i<newtext.length;i++){
    //     if(newtext[i]=="$"){
//             newtext.splice(i,1)
//         }
//     }
//     console.log(newtext.join(""))
// }

// removedollarsign("$80 percent of $life is to show $up")


//2
// function longestword(string){
//     let nwstring=string.split(" ")
//     console.log(nwstring)
//     var long=[]
//     for(i=0;i<nwstring.length;i++){
//         let text=nwstring[i].split("")
//         if(text.length>long.length){
//             long=text
//         }
//     }
//     console.log("The longest word is: "+ long.join(""))
// }

// longestword("Web Development Tutorial")

//3con cuu

// function lamCuu(flock,month){ 
//     for( let c=0;c<month;c++) { 
//         console.log("xin chao day la dan cuu cua toi: " + flock)
//         let big=0
//         for(i=0;i<flock.length;i++){
//             if(flock[i]>big){
//                 big=flock[i]
//             }
//         }
//     console.log("con cuu bu nhat la:"+ big+ ", cao long no thoi!" )
//     flock[flock.indexOf(big)]=8
//     console.log("cao xong gio dan cua toi nhu nay: \n"+ flock)
//     for(d=0;d<flock.length;d++){
//         flock[d]+=50
//     }
//     console.log("sau 1 thang dan cuu toi nhu nay: \n"+ flock)
//     }
// }

// let dancuu=[100,20,50,70,220,20,60]
// lamCuu(dancuu,4)