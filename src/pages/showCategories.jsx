import { useState, useEffect } from "react"
import Tabla from "../components/Tabla"
import { getCategorias } from "../services/categoria.service"
import '../styles/Categorias.css'
import { HeadersCategorias } from "../utils/headers"

const ShowCategories = () => {
  const [categorias, setCategorias] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCategorias().then(
      (response) => {
        setCategorias(response.data)
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
          headers={HeadersCategorias}
          data={categorias}
          type={'categorias'}
        />
        {loading && <h2>Loading...</h2>}
      </div>
    </>
  )
}

export default ShowCategories