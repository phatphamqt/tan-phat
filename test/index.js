

let poke = document.getElementById("pokemons")



async function getData(){
    for(i=1;i<=49;i++){
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.name)
    console.log(data)
    
    poke.insertAdjacentHTML('beforeend',
        `<div class="pokemon">
        <div class="img-container">
        <img src="${data.sprites.other["official-artwork"].front_default}"/>
        </div>
        <div class="info">
        <h3 class="name">${data.name}</h3>
        <small class="type">Type: ${data.types[0].type.name}</small>
        <h3 class="skill">${data.abilities[0].ability.name}
        </div>    
        </div>`)
    }  
}

getData()



