// question :- Develop a weather app that fetches and displays weather information based on a user's location .

import React, { useEffect, useState } from 'react'


const WeatherApp = () => {

    const API_KEY = "25db569bb015d74e7230ebedbbea695c"

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // fetch from api key
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
                    .then((reponse) => reponse.json())
                    .then((data) => setWeather(data))
            })
        }
    }, [])

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center text-center gap-6">
                <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Local Weather</h2>
                {weather ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-7xl font-black tracking-tighter text-white font-mono">
                                {Math.round(weather.main.temp)}°
                            </span>
                            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-2">{weather.name || "Location"}</span>
                        </div>
                        <div className="py-2 px-4 bg-[#18181c] border border-white/5 rounded-xl mt-2 inline-flex mx-auto">
                            <p className="text-sm text-zinc-300 capitalize">{weather.weather[0].description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-3 py-8">
                        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm font-medium text-zinc-500">Locating...</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WeatherApp