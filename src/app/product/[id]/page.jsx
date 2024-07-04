'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchProductDetail, handleBuy } from '@/api/handleBuy';
import NavBar from '@/components/Navbar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  initMercadoPago(process.env.NEXT_PUBLIC_PUBLIC_KEY, {
    locale: "es-AR"
  });

  useEffect(() => {
    const getProduct = async () => {
      const productDetail = await fetchProductDetail(id);
      if (productDetail) {
        setProduct(productDetail);
      } else {
        console.error('Product not found');
      }
    };

    getProduct();
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
          <button onClick={() => handleBuy(product, setPreferenceId, setIsLoading)} className='border' disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Comprar'}
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;