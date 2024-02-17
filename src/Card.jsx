import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-[600px] mx-auto mt-5'>
        <div className='border text-white p-2 rounded-lg'>
          <img src={"http://openweathermap.org/img/w/"+data.weather[0].icon+".png"}/>
            <h2>{data.name}</h2>
            <p>Temperatura: {data.main.temp} ºC</p>
            <p>Temperatura Max: {data.main.temp_max} ºC</p>
            <p>Temperatura Min: {data.main.temp_min} ºC</p>
            <p>Clima: {data.weather[0].description}</p>
            <p>Humedad: {data.main.humidity}%</p>
            <p>Viento: {data.wind.speed} km/h</p>
        </div>
    </div>
  )
}

export default Card