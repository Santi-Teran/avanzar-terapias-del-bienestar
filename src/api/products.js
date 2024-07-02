import { createProduct, sendPdf } from "./api";

export const handleSubmit = async (event, data, setData, file, setFile) => {
  event.preventDefault();

  try {
    await createProduct(data, localStorage.getItem('authToken'));
    setData({ name: '', description: '', price: '', dataUrl: '', imageUrl: '', isActive: true });

    const formData = new FormData();
    formData.append('file', file);

    await sendPdf(formData, localStorage.getItem('authToken'));
    setFile(null);
  } catch (error) {
    console.log(error);
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