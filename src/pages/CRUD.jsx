import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home p-5">
      <div className="card mb-3" style={{ 'max-width': '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./logo-react-icon.png" className="img-fluid rounded-start" alt="React"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">CRUD con React</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">Create</li>
                <li className="list-group-item">Read</li>
                <li className="list-group-item">Update</li>
                <li className="list-group-item">Delete</li>
              </ul>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Link to='/categorias' className="btn btn-primary" >Categorias</Link>
                <Link to='/productos' className="btn btn-primary" >Productos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home