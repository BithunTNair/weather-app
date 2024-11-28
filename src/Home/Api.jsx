import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [weather, setWeather] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const getName = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)

    };
    const giveCity = async (name) => {
        try {

            const response = await axios({
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${import.meta.env.VITE_API_KEY}`


            });
            setWeather(response.data);
            console.log(weather);
        } catch (error) {
            console.log(error);

        }



    }
    return (
        <div>
            {/* <div className='w-full h-screen bg-zinc-900 flex justify-center items-center'>
                <div className='w-1/2 h-3/4 bg-neutral-600'>
                  <div className='w-full flex justify-center'>
                  <input type="text" className='shadow appearance-none border rounded mt-4 w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Type your city' onChange={getName} value={inputValue} />
                  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4' onClick={() => giveCity(inputValue)} > search </button>
                  </div>
                  <div className='bg-blue-400 w-full h-full flex justify-center items-center'>
                    <div className='w-1/2 h-64 bg-orange-950'>

                    </div>

                  </div>
                </div>
            </div> */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white p-4">
                {/* App Title */}
                <h1 className="text-3xl font-bold mb-6">Weather App</h1>

                {/* Input and Button */}
                <div className="flex space-x-2 mb-6">
                    <input
                        type="text"
                        id="cityInput"
                        placeholder="Enter city name"
                        className="px-4 py-2 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onChange={getName} value={inputValue}
                    />
                    <button
                        id="fetchWeather"
                        onClick={() => giveCity(inputValue)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md shadow-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Get Weather
                    </button>
                </div>

                {/* Weather Details Section */}

                {weather ?
                    <div
                        id="weatherDetails"
                        className="w-full max-w-md p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center space-y-4"
                    >
                        <h2 className="text-2xl font-semibold" id="temperature">City Name:  {' ' + weather.name} </h2>
                        <h2 className="text-2xl font-semibold" id="temperature">Temperature: {Math.floor(weather.main.temp)}°C</h2>
                        {/* <img src='https://openweathermap.org/img/wn/9d@2x.png' alt="" /> */}
                        <p id="description" className="text-lg">Weather details will appear here...</p>
                    </div>
                    : <div
                        id="weatherDetails"
                        className="w-full max-w-md p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center space-y-4"
                    >
                        <h2 className="text-2xl font-semibold" id="temperature">City Name:</h2>
                        <h2 className="text-2xl font-semibold" id="temperature">Temperature: --°C</h2>
                      
                        <p id="description" className="text-lg">Weather details will appear here...</p>
                    </div>}
            </div>
        </div>
    )
}

export default Api