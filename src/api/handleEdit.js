import { getProducts, updateProduct } from './api';

export const handleEditSubmit = async (event, editData, setEditing, setServices) => {
  event.preventDefault();
  try {
    await updateProduct(editData, localStorage.getItem('authToken'));
    setEditing(null);
    const updatedServices = await getProducts(localStorage.getItem('authToken'));
    setServices(updatedServices);
  } catch (error) {
    console.log(error)
  }
};

export const handleEditClick = (product, setEditing, setEditData) => {
  setEditing(product.id);
  setEditData({ 
    id: product.id, 
    name: product.name, 
    description: product.description,
    price: product.price,
    dataUrl: product.dataUrl,
    imageUrl: product.imageUrl,
    isActive: product.isActive
  });
};

export const handleEditChange = (event, setEditData) => {
  const { name, value } = event.target;
  setEditData(prevData => ({
    ...prevData,
    [name]: name === 'isActive' ? JSON.parse(value) : value
  }));
};
