
//Init

let movies={
    title:"the dark knnight rises",
    year:"2012",
    rate:"8.4",
}
//Read
// console.log(movies.title)
// console.log(movies.year)
// console.log(movies.rate)
// console.log(movies['title'])
// console.log(movies['year'])
// console.log(movies['rate'])

// console.log(movies.idmb)
// //the result is undefined


// let n=prompt("what you want to know?")

// console.log(movies[n])

// if(movies[n] == null || movies[n] == undefined){
//     alert("wrong property")
// }else{
//     alert(movies[n])
// }

//update
//1
// movies.rate=8.7
// console.log(movies)
// //2
// movies.rate=movies.rate +0.5

// console.log(movies.rate)
// //CREATE
// let u
// while(true){ 
//  u=prompt("what you want to update?")
//  if(u != 0){
//      break
//  }
// }
// if(movies[u] == null || movies[u] == undefined){
//     alert(`${u} does not exist in our data, we will add new `)
//     a=prompt("Enter new data")
//     movies[u]=a
//     alert(movies[u])
// }else{
//     alert(movies[u])
// }

// console.log(movies)

//array of objects

// let movie=[
//     {
//         title:"avatar",
//         year: 2010,
//         rate: 9.0,
//     },
//     {
//         title:"hangover",
//         year: 2011,
//         rate: 8.5,
//     },
//     {
//         title:"Money heist",
//         year: 2018,
//         rate: 8.7,
//     }
// ]
// console.log(movie[0])

// console.log(movie[2].title)

// for(i=0;i<movie.length;i++){
//     console.log(movie[i].title)
//     console.log(movie[i].year)
//     console.log(movie[i].rate)
// }

// for(i=0;i<movie.length;i++){
//     console.log(movie[i].title)
//     console.log("Year: "+ movie[i].year)
//     console.log("Rate: "+ movie[i].rate)
//  console.log("-------------------------")   
// }

// movie[2].rate+= 0.7
// console.log(movie[2].title)
//     console.log("Year: "+ movie[2].year)
//     console.log("Rate: "+ movie[2].rate)
//  console.log("-------------------------")   

//object containing array

let movie={
    title:"Fast 5",
    year: 2013,
    rate: 7.5,
    casts: ["vindesiel","bryant","galgadot"]
}
console.log(movie.title)
console.log("Year: "+ movie.year)
console.log("Rate: "+ movie.rate)
console.log("Casts: "+ movie.casts)

movie.casts.push("jason")

console.log(movie.casts)
console.log(movie.title)
console.log("Year: "+ movie.year)
console.log("Rate: "+ movie.rate)
console.log("Casts: "+ movie.casts)