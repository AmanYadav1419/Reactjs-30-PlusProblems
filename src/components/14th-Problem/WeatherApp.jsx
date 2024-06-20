// question :- Develop a weather app that fetches and displays weather information based on a user's location .

import React, { useEffect, useState } from 'react'


const WeatherApp = () => {

    const API_KEY = "25db569bb015d74e7230ebedbbea695c"

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=> {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // fetch from api key
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
              .then((reponse) => reponse.json())
              .then((data) => setWeather(data))  
            })
        }
    },[])

  return (
    <div>
        {
            weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Tempeature : {weather.main.temp} in F</p>
                    <p>Conditions : {weather.weather[0].description}</p>                   
                </div>
            ) : (
                <p>
                    Loading ...
                </p>
            )
        }
    </div>
  )
}

export default WeatherApp