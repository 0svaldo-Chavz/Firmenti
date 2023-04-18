import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductoById, editarProducto } from "../services/producto.service"
import { getCategorias } from "../services/categoria.service"
import ProductFields from "../components/ProductFields"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UpdateProduct = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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
    
    getCategorias().then(
      (response) => {
        setCategorias(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [id])

  const handleChange = (e) => {
    setProducto({...producto, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    try {
      await editarProducto(producto)
      navigate(`/productos/${id}`)
    } catch (error) {
      console.log(error)
      error.response.data.errors.map((error) =>
        toast.error(`${error.msg}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      )
    }
  }
  

  return (
    <div className="row p-5">
      <ToastContainer />
      <div className="offset-lg-3 col-lg-6">
        {loading && <h2>Loading...</h2>}
        <div className="container" >
          <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title p-4 ">
              <h2>Editar producto</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor='nombre' id='nombre'>Nombre</label>
                    <input
                      required
                      name="nombre"
                      id="nombre"
                      value={producto?.nombre}
                      onChange={(e) => handleChange(e)} 
                      className="form-control"></input>
                  </div>
                </div>
                {categorias
                  ? (<ProductFields handleChange={handleChange} categorias={categorias} item={producto} />)
                  : null}
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor='descripcion'>Descripción</label>
                    <textarea
                      required
                      className='form-control'
                      cols='50'
                      rows='10'
                      id="descripcion"
                      placeholder="Redacta una breve descripción..."
                      value={producto?.descripcion}
                      name='descripcion'
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-success me-md-2" style={{ 'width': '15%' }} onClick={(e) => handleSubmit(e)}>Editar</button>
                  <Link to={`/productos/${id}`} className="btn btn-danger">Cancelar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default UpdateProduct