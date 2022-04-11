const main=document.querySelector('main')
const form=document.querySelector('form')
const search=document.querySelector('#search')

search.value=`` // so that after reloading the text will not be there in the input field

const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const apiUrl=(location)=>{
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
}

async function getWeatherByLocation(location)
{
    const resp=await fetch(apiUrl(location))
    const respData=await resp.json()

    //console.log(respData.weather)
    addWeatherToPage(respData)
}


function addWeatherToPage(data)
{
    const temp= KtoC(data.main.temp)

    const weather = document.createElement('div')
    weather.classList.add('weather')

    weather.innerHTML =`
    <h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        ${temp}°C
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
    <small>${data.weather[0].description}</small>
    `
   // console.log(data.weather)
    // cleanUp
    main.innerHTML=``
    main.appendChild(weather)
}

function KtoC(k)
{
    return Math.floor(k - 273.15)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location=search.value

    if(location)
    {
        getWeatherByLocation(location)
    }
})