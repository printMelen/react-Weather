import Entrada from "./Entrada.jsx"

const Contenedor = () => {
  return (
    <form method="post" className="w-[600px] mx-auto  flex flex-col">
        <Entrada name="ciudad" />
        <Entrada name="pais" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Consultar Clima</button>
    </form>
  )
}

export default Contenedor