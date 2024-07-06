'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchProductDetail, handleBuyClick } from '@/api/handleBuy';
import Footer from '@/components/Footer';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButton from '@/components/PayPalButton';
import NavBar from '@/components/Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  initMercadoPago(process.env.NEXT_PUBLIC_KEY, {
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
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_CLIENT_ID }}>
      <div className='bg-violet-200'>
        <NavBar />
        <div className='hidden md:flex'>a</div>
        <div className='my-20 flex flex-col md:flex-row gap-5 shadow-xl md:mx-40 p-5 bg-white rounded-lg'>
          <div className='flex flex-col gap-5 md:w-1/2'>
            <div className='md:w-[500px] md:h-[600px] w-[200] h-[300] bg-slate-200 mx-auto'>
            <img src={product.imageUrl} alt='Product' className="w-full h-full " />
            </div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className='md:w-1/2'>
            <button 
              onClick={() => handleBuyClick(product, setPreferenceId, setIsLoading, setShowPaymentOptions)} 
              className='w-full font-bold p-3 rounded border border-violet-500 text-violet-500 hover:bg-violet-600 hover:text-white transition-all' 
              disabled={isLoading}
            >
              {isLoading ? 'Cargando...' : 'Comprar'}
            </button>
            {showPaymentOptions && (
              <div className='flex flex-col md:flex-row justify-center md:gap-4'>
                <div className='md:w-1/2 mt-4 z-0'>
                  <PayPalButton product={product} />
                </div>
                <div className='md:w-1/2'>
                  {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
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