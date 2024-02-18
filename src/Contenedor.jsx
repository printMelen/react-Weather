import { useState, useEffect } from "react";
import Entrada from "./Entrada.jsx";
import Card from "./Card.jsx";

const Contenedor = () => {
  const [data, setData] = useState();
  const [formData, setFormData] = useState(
    {
      ciudad: localStorage.getItem("ciudad") || "Salamanca",
      pais: localStorage.getItem("pais") || "ES",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const ciudad = event.target.elements.ciudad.value;
    const pais = event.target.elements.pais.value;
    setFormData({
      ciudad: ciudad,
      pais: pais
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const http_request = new XMLHttpRequest();
      http_request.open(
        "GET",
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          formData.ciudad +
          "," +
          formData.pais +
          "&units=metric&lang=es&appid=" +
          "274553f8f79e7d71d9e8378186ce7d79",
        true
      );
      http_request.send();
  
      http_request.onreadystatechange = () => {
        if (http_request.readyState === 4) {
          if (http_request.status === 200) {
            const respuesta = JSON.parse(http_request.responseText);
            localStorage.setItem("ciudad", formData.ciudad);
            localStorage.setItem("pais", formData.pais);
            setData(respuesta);
            console.log(respuesta);
          }
        }
      };
    };
  
    fetchData();
  }, [formData]);

  // const changeValue=(e) => {
  //   setFormData((prev)=>{
  //     let helper = {...prev};
  //     helper[`${e.target.id}`] = e.target.value;
  //     return helper;
  //     });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.elements.ciudad.value);
  //   console.log(event.target.elements.pais.value);
  //   setFormData({
  //     ciudad: event.target.elements.ciudad.value,
  //     pais: event.target.elements.pais.value
  //   });
  //   console.log(formData);
  //   // const ciudad = formData.ciudad;
  //   // const pais = formData.pais;
  //   // const ciudad = event.target.elements.ciudad.value;
  //   // const pais = event.target.elements.pais.value;
  //   const http_request = new XMLHttpRequest();
  //   http_request.open(
  //     "GET",
  //     "https://api.openweathermap.org/data/2.5/weather?q=" +
  //       formData.ciudad +
  //       "," +
  //       formData.pais +
  //       "&units=metric&lang=es&appid=" +
  //       "274553f8f79e7d71d9e8378186ce7d79",
  //     true
  //   );
  //   http_request.send();

  //   http_request.onreadystatechange = () => {
  //     if (http_request.readyState === 4) {
  //       if (http_request.status === 200) {
  //         const respuesta = JSON.parse(http_request.responseText);
  //         // setFormData(respuesta);
  //         console.log(ciudad);
  //         console.log(pais);
  //         localStorage.setItem("ciudad", ciudad);
  //         localStorage.setItem("pais", pais);
  //         setData(respuesta);
          
  //         console.log(respuesta);
  //       }
  //     }
  //   };
  // };
  // useEffect(() => {
  //   const http_request = new XMLHttpRequest();
  //   http_request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + "Salamanca" + "," + "ES" + "&units=metric&lang=es&appid=" + "274553f8f79e7d71d9e8378186ce7d79", true);
  //   http_request.send();
  //   http_request.onreadystatechange = () => {
  //     if (http_request.readyState === 4) {
  //       if (http_request.status === 200) {
  //         const respuesta = JSON.parse(http_request.responseText);
  //         // setFormData(respuesta);
  //         setData(respuesta);
  //         console.log(respuesta);
  //       }
  //     }
  //   };
  // }, [formData]);
  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="w-[600px] mx-auto  flex flex-col"
      >
        <Entrada name="ciudad"  id="ciudad"  value={formData.ciudad}/>
        <Entrada name="pais"  id="pais" value={formData.pais}/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Consultar Clima
        </button>
      </form>
      {data ? <Card data={data}></Card> : null}
    </>
  );
};

export default Contenedor;
