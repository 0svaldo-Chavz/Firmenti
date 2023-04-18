import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getCategoriaById } from "../services/categoria.service";
import Card from "../components/Card";


const CategoriaID = ({ type }) => {
  const { id } = useParams()
  
  const [categoria, setCategoria] = useState({})
  const [loading,setLoading] = useState(true)

	useEffect(() => {
    setLoading(true)
    getCategoriaById(id).then(
      (response) => {
        setCategoria(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
    .finally(() => setLoading(false))
  }, [id])
  

  return (
    <div>  
      {!loading && (<Card type='categorias' elemento={categoria} />)}
    </div>
  )
}

export default CategoriaID