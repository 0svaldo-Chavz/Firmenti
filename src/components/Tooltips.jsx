import { Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { Link } from "react-router-dom"
import CategoryIcon from '@mui/icons-material/Category';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';


const Tooltips = ({ type }) => {
  

  return (
    <div className='item-add'>
      <Tooltip title='Crear'>
        <Link to={`/${type}/crear`} style={{ textDecoration: 'none' }}>
          <button className='btn btn-success' style={{ width: '100%' }}>
            <AddIcon className='icon' fontSize='15px' />
          </button>
        </Link>
      </Tooltip>
      {type === 'categorias' ? (
        <Tooltip title='Ver Productos'>
          <Link to={`/productos`} style={{ textDecoration: 'none' }}>
            <button className='btn btn-dark' style={{ width: '100%' }}>
              <InventoryTwoToneIcon className='icon' fontSize='15px' />           
            </button>
          </Link>
        </Tooltip>          
      ):(<Tooltip title='Ver Categorias'>
            <Link to={`/categorias`} style={{ textDecoration: 'none' }}>
              <button className='btn btn-dark' style={{ width: '100%' }}>
                <CategoryIcon className='icon' fontSize='15px' />           
              </button>
            </Link>
          </Tooltip>          )}
    </div>
  )
}

export default Tooltips