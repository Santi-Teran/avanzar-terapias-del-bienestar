import { createProduct, sendPdf } from "./api";

export const handleSubmit = async (event, data, setData, file, setFile, imageFile, setImageFile) => {
  event.preventDefault();

  try {
    const token = localStorage.getItem('authToken');
    let dataUrl = '';
    let imageUrl = '';

    if (file) {
      const response = await sendPdf(file, token);
      dataUrl = response.dataUrl;
      setFile(null);
    }

    if (imageFile) {
      imageUrl = imageFile; // La imagen ya está en formato base64
      setImageFile(null);
    }

    const productData = { ...data, dataUrl, imageUrl }; // Agrega dataUrl e imageUrl a los datos del producto
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

export const handleImageFileChange = async (event, setImageFile) => {
  const file = event.target.files[0];
  if (file && file.type === 'image/png') {
    const resizeImage = await file.arrayBuffer();
    const imageData = `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(resizeImage)))}`;
    setImageFile(imageData);
  } else {
    console.error('Por favor, sube una imagen válida en formato PNG.');
  }
};