import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { getCategoriaById, eliminarCategoria } from "../services/categoria.service";
import { eliminarProducto } from "../services/producto.service";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const ElementTabla = ({ elemento, index, type }) => {

	const [categoria, setCategoria] = useState({})
	const [loading,setLoading] = useState(true)

	useEffect(() => {
    setLoading(true)
    getCategoriaById(elemento.idCategoria).then(
      (response) => {
        setCategoria(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
    .finally(() => setLoading(false))
  }, [elemento.idCategoria])
  
	const handleDelete = async (e, id) => {
		try {
			type === 'categorias'
			? await eliminarCategoria(id)
			: await eliminarProducto(id)
		
			window.location.reload()	
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
		<>
			<ToastContainer />
			{loading && <h2>Loading...</h2>}
      <tr> 
        <td>{index + 1}</td>
        <td>{elemento.nombre}</td>
        {type === 'productos' && categoria?
					(<>
						<td>{categoria.nombre}</td>
						<td>{elemento.precio}</td></>)
          :null}
				<td className='acciones'>
					<Tooltip title='Ver Detalles'>
						<Link
							to={`/${type}/${elemento.id}`}
							style={{ textDecoration: 'none' }}
						>
							<button
								className='btn btn-primary'
								style={{ fontSize: '15px', padding: '6px' }}
							>
								<RemoveRedEyeIcon className='icon' fontSize='15px' />
							</button>
						</Link>
					</Tooltip>
					<Tooltip title='Eliminar'>
						<button
							className='btn btn-danger'
							style={{ fontSize: '15px', padding: '6px' }}
							onClick={(e) => handleDelete(e, elemento.id)}
						>
							<DeleteForeverIcon className='icon' fontSize='15px' />
						</button>
					</Tooltip>				
        </td>
      </tr>
    </>
  )
}

export default ElementTabla