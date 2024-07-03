'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Success = () => {
  const router = useRouter();
  const { query } = router;
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    const preferenceIdFromUrl = new URLSearchParams(window.location.search).get('preference_id');
    if (preferenceIdFromUrl) {
      setPreferenceId(preferenceIdFromUrl);
    }
  }, []);

  const handleSubmit = async (event) => {
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

  return (
    <div>
      <h1>Compra exitosa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar PDF</button>
      </form>
    </div>
  );
};

export default Success;