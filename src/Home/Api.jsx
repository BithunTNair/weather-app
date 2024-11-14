import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=varkala&appid={}'

        }).then((response) => {
            console.log(response);
            setWeather(response)

        }).catch((error) => {
            console.log(error);

        })
    },[])
    return (
        <div>

        </div>
    )
}

export default Api