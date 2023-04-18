import '../styles/Table.css'
import ElementTabla from './ElementTabla'
import Tooltips from './Tooltips'
const Tabla = ({data, type, headers}) => {
  return (
    <div className='table-responsive'>
      <div className='table-wrapper'>
        <div className='table-header'>
          {type === 'categorias' ? (<h3> CRUD DE CATEGORIAS</h3>) : (<h3> CRUD DE PRODUCTOS</h3>)}
        </div>
        <Tooltips type={type}/>
          {data?.length > 0 ?
            (
              <>
                <table className='table table-striped table-hover'>
                  <thead className='table-thead text-light'>
                    <tr>
                      {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((element, index) => (
                      <ElementTabla
                        index={index}
                        key={element.id}
                        elemento={element}
                        type={type}
                      />
                    ))}
                  </tbody>
                </table>
              </>
            ): null}
        
      </div>
    </div>
  )


}

export default Tabla