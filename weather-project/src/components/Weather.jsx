import React, { useState } from "react";
import axios from "axios";

const Weather = () =>{

    const [city,setCity] = useState("")
    const [weather,setWeather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(event)
    {
        setCity(event.target.value)
    }

    function getWeather ()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ca47bf89741fa8371e5186dc87e0eb9`)

        weatherData.then((success)=>{
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    }

    return (
    <div className="min-h-screen bg-cover  flex items-center justify-center "
    style={{
        backgroundImage : `url("https://wallpaperaccess.com/full/1540049.jpg")`,
    }}>
        
        <div className="bg-black bg-opacity-60 sm:bg-transparent p-20 rounded-lg absolute text-blue-400">
            <h2 className="text-2xl font-bold ">Weather Report</h2>
            <p className="mt-2">I can give you a weather report about your city</p>
            <input onChange={handleCity} type="text" placeholder="Enter your city...." className="
            border border-gray-950 rounded-lg p-2 mt-2 text-black"/>
            <br></br>
            <button onClick={getWeather} className="bg-black  border rounded-lg
            p-2 mt-2">Get Report</button>
            <div className=""> 
                 <p>Weather: {weather}</p>
                <p>Temperature:{temp}</p>
                <p>Description:{desc}</p>
            </div>
           
        </div>
    </div>
)
}

export default Weather;

