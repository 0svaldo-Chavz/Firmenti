import { Link } from "react-router-dom";
import '../styles/Categorias.css'


const Card = ({ elemento, type }) => {


  return (
    <div className="d-flex-center p-5 ">
    <div class="card text">
      <div class="card-header">
        <h2>Detalles</h2>
      </div>
      <div class="card-body">
        {/*<h5 class="card-title"></h5>*/}
        <p class="card-text"
        >{elemento &&
              <div>
            {type === 'categorias'
              ? (<>
                <h2>Nombre de Categoría : <b>{elemento.nombre}</b> </h2>
                <h5>Descripción: {elemento.descripcion}</h5>
                </>)
              : (<>
                <h2>Nombre de producto: <b>{elemento.nombre}</b>  </h2>
                <h5>Precio : {elemento.precio}</h5>
                <h5>Descripción : {elemento.descripcion}</h5>
                
                </>)}
              </div>
            }</p>
        <div className="d-flex gap-2">
            <Link className="btn btn-primary" to={`/${type}/editar/${elemento.id}`}>Editar</Link>
            <Link className="btn btn-danger" to={`/${type}`}>Regresar</Link>
        </div>
      </div>
      <div class="card-footer text-body-secondary">
        {elemento?.createdAt}
      </div>
      </div>
      </div>
  )
}

export default Card