'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPreference } from '@/api/handleBuy';
import NavBar from '@/components/Navbar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('TEST-91aee071-1995-40d7-b374-a92c6cae0698', {
    locale: "es-AR"
  });

  const handleBuy = async () => {
    if (product) {
      const id = await createPreference(product);
      if (id) setPreferenceId(id);
    }
  };

  useEffect(() => {
    if (id) {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const products = JSON.parse(storedProducts);
        const productDetail = products.find(product => product.id === parseInt(id, 10));
        setProduct(productDetail);
      }
    }
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
        </div>a
        <div className='md:w-1/2 h-80 bg-slate-400 mb-14 md:mb-0'>
          <button onClick={handleBuy} className='border'>Comprar</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;