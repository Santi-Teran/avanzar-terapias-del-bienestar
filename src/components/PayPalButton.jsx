import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalButton = ({ product }) => {
  const createOrder = (data, actions) => {
    return fetch(`https://avanzarbackend.azurewebsites.net/api/PayPal/create-paypal-payment?unitPrice=${product.price}&productName=${product.name}`, {
      method: 'POST',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((order) => {
      if (order && order.id) {
        return order.id;
      } else {
        throw new Error('Invalid response format');
      }
    })
    .catch((error) => {
      console.error('Error creating PayPal order:', error);
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order?.capture();
    console.log(order);
    const formData = new FormData();
    formData.append('name', order.purchase_units[0].items[0].name);
    formData.append('email', order.payer.email_address);
    try {
      await axios.post('https://avanzarbackend.azurewebsites.net/api/Product/paypal-purchase', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data'
        }
      });
      // Redirigir a la página de éxito
      window.location.href = 'http://localhost:3000/success';
    } catch (error) {
      console.error('Error sending order ID:', error);
    }
  };

  return (
    <PayPalButtons 
      style={{ 
        layout: 'horizontal', 
        color: 'gold', 
        shape: 'rect', 
        label: 'paypal', 
        height: 48,
        tagline: false
      }}
      createOrder={createOrder}
      onApprove={onApprove}
    />
  );
};

export default PayPalButton;