const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

//selector

const contentEl = document.getElementById('content')
const searchEl = document.getElementById("search")
const btn = document.getElementById("btn")


async function getweather(location = "Can tho"){
    const res = await fetch(`${API_URL}/weather?q=${location}&appid=${API_KEY}`);
    const data = await res.json();
    console.log("data" ,data);
    createweather(data)
}

function createweather(city){
    // console.log("city" ,city)
    let temp = KtoC(city.main.temp)
    let innerWeather =`             
    <div>
    <h3>${city.weather[0].main}</h3>
    <h1>${city.name}</h1>
    <h2><img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" />${temp}°C</h2>
</div>`
    contentEl.insertAdjacentHTML('beforeend',innerWeather)
}

function KtoC(K) {
    return Math.floor(K-273.15)
}

btn.addEventListener('click',function(){
    let location = searchEl.value
    contentEl.innerHTML="";
    getweather(location)
})
getweather()