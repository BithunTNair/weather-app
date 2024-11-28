import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [weather, setWeather] = useState([]);
    const [inputValue, setInputValue] = useState('');
    var city = 'varkala'
    // const getcity = (name) => {
    //     var city = name
    // }
    useEffect(() => {
        // getcity('varkala')
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ import.meta.env.VITE_API_KEY}`

        }).then((response) => {
            console.log(response);
            setWeather(response)

        }).catch((error) => {
            console.log(error);

        })
    }, []);
    const getName = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)

    };
    const giveCity = (name) => {
       

    }
    return (
        <div>
            <div className='w-full h-screen bg-zinc-900 flex justify-center items-center'>
                <div className='w-1/2 h-3/4 bg-neutral-600 flex  items-start justify-center '>
                    <input type="text" className='shadow appearance-none border rounded mt-4 w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Type your city' onChange={getName} value={inputValue} />
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4' onClick={() => giveCity(inputValue)} > search </button>
                </div>
            </div>
        </div>
    )
}

export default Api