'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchProductDetail, handleBuy } from '@/api/handleBuy';
import NavBar from '@/components/Navbar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Footer from '@/components/Footer';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

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

  const handleBuyClick = async () => {
    setIsLoading(true);
    await handleBuy(product, setPreferenceId, setIsLoading);
    setShowPaymentOptions(true);
    setIsLoading(false);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      <div>
        <NavBar />
        <div className='hidden md:flex'>a</div>
        <div className='my-20 flex flex-col md:flex-row gap-5 shadow-xl md:mx-40 p-5'>
          <div className='flex flex-col gap-5 md:w-1/2'>
            <div className='w-full h-80 bg-slate-200'></div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className='md:w-1/2 h-80 bg-slate-400 mb-14 md:mb-0'>
            <button 
              onClick={handleBuyClick} 
              className='border w-full' 
              disabled={isLoading}
            >
              {isLoading ? 'Cargando...' : 'Comprar'}
            </button>
            {showPaymentOptions && (
              <div className='flex flex-col items-center mt-4'>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
                <PayPalButtons style={{ layout: 'vertical' }} />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default ProductDetail;
