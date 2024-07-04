import axios from "axios";

const API_URL = 'https://avanzarbackend.azurewebsites.net/api';

export const createProduct = async (data, token) => {
  try {
    await axios.post(`${API_URL}/Product`, data, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendPdf = async (file, token) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_URL}/Product/upload-file`, formData, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data; // Asegúrate de que el backend esté devolviendo dataUrl en el objeto data
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
};

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/Product`);
  if (!response.ok) throw new Error('Something went wrong');
  return response.json();
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/Product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Asegurarse de devolver null en caso de error
  }
};
