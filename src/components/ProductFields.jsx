import React from 'react'

const ProductFields = ({handleChange,categorias,item}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor='nombre' id='nombre'>Precio</label>
          <input
            required
            name='precio'
            id='precio'
            value={item?.precio}
            onChange={(e) => handleChange(e)} 
            className="form-control"></input>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor='idCategoria' id='idCategoria'>Categoria</label>
          <select
            value={categorias?.nombre}
            name='idCategoria'  
            id='idCategoria'
            onChange={(e) => handleChange(e)}
            className='select form-control'
          >
            <option >---Seleccionar---</option>  
            {categorias.map((categoria) => (
              <option value={`${categoria.id}`}>{categoria?.nombre}</option>  
            ))}
            
          </select>
        </div>
      </div>
    </>
  )
}

export default ProductFields