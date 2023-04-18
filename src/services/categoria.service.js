import axios from "axios";

const route = "/categorias";

const URL_API = "http://localhost:4000/api";

export const getCategorias = async () => {
  return await axios.get(URL_API + route, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const getCategoriaById = async (id) => {
  return await axios.get(URL_API + route + "/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const getProductosByCategoria = async (id) => {
  return await axios.get(URL_API + route + "/" + id + "/productos", {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const createCategoria = async (categoria) => {
  const response = await axios.post(URL_API + route, categoria, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const editarCategoria = async (categoria) => {
  const response = await axios.put(
    URL_API + route + "/" + categoria.id,
    categoria,
    {
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const eliminarCategoria = async (id) => {
  console.log(id);
  return await axios.delete(URL_API + route + "/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};
