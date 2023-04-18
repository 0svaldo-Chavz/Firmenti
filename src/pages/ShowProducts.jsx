import { useState, useEffect } from "react"
import Tabla from "../components/Tabla"
import '../styles/Categorias.css'
import { HeadersProductos } from "../utils/headers"
import { getProductos } from "../services/producto.service"

const ShowProducts = () => {
  const [productos, setProductos] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductos().then(
      (response) => {
        setProductos(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
    .finally(() => setLoading(false))
  }, [])
  return (
    <>
      
      <div className="container p-5">
        <Tabla
          headers={HeadersProductos}
          data={productos}
          type={'productos'}
        />
        {loading && <h2>Loading...</h2>}
      </div>
    </>
  )
}

export default ShowProducts