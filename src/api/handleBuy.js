import axios from "axios";

export const createPreference = async (product) => {
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
