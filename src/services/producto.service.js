import axios from "axios";

const route = "/productos";

const URL_API = "http://localhost:4000/api";

export const getProductos = async () => {
  return await axios.get(URL_API + route, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const getProductoById = async (id) => {
  return await axios.get(URL_API + route + "/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const getProductosByProducto = async (id) => {
  return await axios.get(URL_API + route + "/" + id + "/productos", {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

export const createProducto = async (producto) => {
  const response = await axios.post(URL_API + route, producto, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const editarProducto = async (producto) => {
  const response = await axios.put(
    URL_API + route + "/" + producto.id,
    producto,
    {
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const eliminarProducto = async (id) => {
  return await axios.delete(URL_API + route + "/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};
