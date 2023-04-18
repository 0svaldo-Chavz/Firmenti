import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowCategories from "./pages/showCategories";
import ShowProducts from "./pages/ShowProducts";
import NewItem from "./pages/NewItem";
import Home from "./pages/CRUD";
import CategoriaID from "./pages/CategoriaID";
import ProductoID from "./pages/ProductoID";
import UpdateCategory from "./pages/UpdateCategory";
import UpdateProduct from "./pages/UpdateProduct";
import "./styles/Home.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categorias" element={<ShowCategories />}></Route>
        <Route path="/productos" element={<ShowProducts />}></Route>
        <Route
          path="/categorias/crear"
          element={<NewItem type={"categorias"} />}
        ></Route>
        <Route
          path="/productos/crear"
          element={<NewItem type={"productos"} />}
        ></Route>
        <Route path="/categorias/:id" element={<CategoriaID />}></Route>
        <Route path="/productos/:id" element={<ProductoID />}></Route>
        <Route
          path="/categorias/editar/:id"
          element={<UpdateCategory />}
        ></Route>
        <Route path="/productos/editar/:id" element={<UpdateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
