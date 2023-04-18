import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCategoriaById, editarCategoria } from "../services/categoria.service"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UpdateCategory = () => {
  const { id } = useParams()
  const [categoria, setCategoria] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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
  
  const handleChange = (e) => {
    setCategoria({...categoria, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    try {
      await editarCategoria(categoria)
      navigate(`/categorias/${id}`)
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
        <div className="container">
          <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title p-4">
              <h2>Editar Categoria</h2>
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
                      value={categoria.nombre}
                      onChange={(e) => handleChange(e)} 
                      className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor='descripcion'>Descripción</label>
                    <textarea
                      required
                      id="descripcion"
                      className='form-control'
                      cols='50'
                      rows='10'
                      placeholder="Redacta una breve descripción..."
                      value={categoria.descripcion}
                      name='descripcion'
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-success me-md-2" style={{ 'width': '15%' }} onClick={(e) => handleSubmit(e)}>Editar</button>
                  <Link to={`/categorias/${id}`} className="btn btn-danger">Cancelar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default UpdateCategory