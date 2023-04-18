import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductoById } from "../services/producto.service"
import Card from "../components/Card"


const ProductoID = () => {
  const {id} = useParams()

  const [producto, setProducto] = useState({})
  const [loading,setLoading] = useState(true)

	useEffect(() => {
    setLoading(true)
    getProductoById(id).then(
      (response) => {
        setProducto(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
    .finally(() => setLoading(false))
  }, [id])
  

  return (
    <div>  
      {!loading && (<Card type='productos' elemento={producto} />)}
    </div>
  )
}

export default ProductoID