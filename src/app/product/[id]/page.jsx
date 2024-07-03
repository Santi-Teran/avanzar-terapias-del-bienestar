'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPreference } from '@/api/handleBuy';
import NavBar from '@/components/Navbar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { getProductById } from '@/api/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  initMercadoPago("TEST-91aee071-1995-40d7-b374-a92c6cae0698", {
    locale: "es-AR"
  });

  const handleBuy = async () => {
    if (product) {
      setIsLoading(true); // Mostrar indicador de carga
      const preferenceId = await createPreference(product);
      if (preferenceId) {
        setPreferenceId(preferenceId);
      }
      setIsLoading(false); // Ocultar indicador de carga
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
          console.error('Invalid product ID');
          return;
        }
        let productDetail = null;
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          const products = JSON.parse(storedProducts);
          productDetail = products.find(product => product.id === productId);
        }
        if (!productDetail) {
          // Si no se encuentra en localStorage, buscar en la API
          productDetail = await getProductById(productId);
        }
        if (productDetail) {
          setProduct(productDetail);
        } else {
          console.error('Product not found');
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <div className='hidden md:flex'>a</div>
      <div className='md:mt-20 flex flex-col md:flex-row gap-5 shadow-xl md:mx-40 p-5'>
        <div className='flex flex-col gap-5 md:w-1/2'>
          <div className='w-full h-80 bg-slate-200'></div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className='md:w-1/2 h-80 bg-slate-400 mb-14 md:mb-0'>
          <button onClick={handleBuy} className='border' disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Comprar'}
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;