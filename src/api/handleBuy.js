import axios from 'axios';
import { getProductById } from './api';

const createPreference = async (product) => {
  try {
    const response = await axios.post(
      `https://avanzarbackend.azurewebsites.net/api/MercadoPago/create?amount=${product.price}&productName=${encodeURIComponent(product.name)}`
    );
    const { id } = response.data;
    return id;
  } catch (error) {
    console.error('Error creating preference:', error);
  }
};

export const handleBuy = async (product, setPreferenceId, setIsLoading) => {
  if (product) {
    setIsLoading(true); // Mostrar indicador de carga
    const preferenceId = await createPreference(product);
    if (preferenceId) {
      setPreferenceId(preferenceId);
    }
    setIsLoading(false); // Ocultar indicador de carga
  }
};

export const fetchProductDetail = async (id) => {
  if (id) {
    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      console.error('Invalid product ID');
      return null;
    }
    try {
      const productDetail = await getProductById(productId);
      return productDetail;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
  return null;
};