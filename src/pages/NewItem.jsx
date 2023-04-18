import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCategoria, getCategorias } from '../services/categoria.service' 
import { createProducto } from '../services/producto.service'
import { Link } from 'react-router-dom'
import ProductFields from '../components/ProductFields'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const NewItem = ({type}) => {

  const [categorias, setCategorias] = useState([]) 
  const navigate = useNavigate()
  const [item, setItem] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    idCategoria: '',

  })
  

  useEffect(() => {
    getCategorias().then(
      (response) => {
        setCategorias(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const handleChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    try {
      
      type === 'categorias'
        ? await createCategoria(item)
        : await createProducto(item)
      navigate(`/${type}`)
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
        <div className="container">
          <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title">
              <h2>Create Item</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor='nombre' id='nombre'>Nombre</label>
                    <input
                      required
                      id='nombre'
                      name='nombre'
                      value={item.nombre}
                      onChange={(e) => handleChange(e)} 
                      className="form-control"></input>
                  </div>
                </div>
                {type === 'productos' && categorias
                  ? (<ProductFields handleChange={handleChange} categorias={categorias} item={item} />)
                  : null}
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor='descripcion'>Descripción</label>
                    <textarea
                      required
                      id='descripcion'
                      className='form-control'
                      cols='50'
                      rows='10'
                      placeholder="Redacta una breve descripción..."
                      value={item.descripcion}
                      name='descripcion'
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-success me-md-2" style={{ 'width': '15%' }} onClick={(e) => handleSubmit(e)}>Crear</button>
                  <Link to={`/${type}`} className="btn btn-danger">Cancelar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default NewItem