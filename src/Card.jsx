import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-[600px] mx-auto mt-5'>
        <div className='bg-blue-500 text-white p-2 rounded-lg'>
            <h2>{data.name}</h2>
            <p>Temperatura: {data.main.temp} ºC</p>
            <p>Clima: {data.weather[0].description}</p>
            <p>Humedad: 20%</p>
            <p>Viento: 10 km/h</p>
        </div>
    </div>
  )
}

export default Card