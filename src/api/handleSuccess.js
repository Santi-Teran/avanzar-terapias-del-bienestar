import axios from 'axios';

export const handleSubmit = async (event, email, setIsSubmitted, preferenceId) => {
  event.preventDefault();

  if (!preferenceId || !email) {
    console.error('Missing preferenceId or email');
    return;
  }

  try {
    console.log('Sending data:', { preferenceId, email });
    const response = await axios.post(
      'https://avanzarbackend.azurewebsites.net/api/Product/purchase', 
      { preferenceId, email },
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    console.log('Response:', response.data);
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error sending purchase data:', error.response?.data || error.message);
  }
};

export const isMercadoPago = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.toString().length > 0;
};