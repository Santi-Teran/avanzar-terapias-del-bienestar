import { createProduct, sendPdf } from "./api";

export const handleSubmit = async (event, data, setData, file, setFile) => {
  event.preventDefault();

  try {
    const token = localStorage.getItem('authToken');
    let dataUrl = '';

    if (file) {
      const response = await sendPdf(file, token); // Envía el archivo directamente
      dataUrl = response.dataUrl;
      setFile(null);
    }

    const productData = { ...data, dataUrl }; // Agrega dataUrl a los datos del producto
    await createProduct(productData, token);
    
    setData({ name: '', description: '', price: '', dataUrl: '', imageUrl: '', isActive: true });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const handleChange = (event, setData) => {
  const { name, value } = event.target;
  setData(prevData => ({
    ...prevData,
    [name]: value
  }));
};

export const handleFileChange = (event, setFile) => {
  setFile(event.target.files[0]);
};