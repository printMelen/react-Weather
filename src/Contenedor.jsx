import { useState, useEffect } from "react"
import Entrada from "./Entrada.jsx"
import Card from "./Card.jsx"

const Contenedor = () => {
    const [data,setData]= useState();
    useEffect(() => {
      const http_request = new XMLHttpRequest();
      http_request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + "Salamanca" + "," + "ES" + "&units=metric&lang=es&appid=" + "274553f8f79e7d71d9e8378186ce7d79", true);
      http_request.send();
      http_request.onreadystatechange = () => {
        if (http_request.readyState === 4) {
          if (http_request.status === 200) {
            const respuesta = JSON.parse(http_request.responseText);
            setData(respuesta);
            console.log(respuesta);
          }
        }
      };
    }, []);
  return (
    <>
      <form method="post" className="w-[600px] mx-auto  flex flex-col">
          <Entrada name="ciudad" />
          <Entrada name="pais" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Consultar Clima</button>
      </form>
      {data ? <Card data={data}></Card> : null}
    </>
  )
}

export default Contenedor