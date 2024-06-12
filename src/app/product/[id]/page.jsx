import NavBar from '@/components/Navbar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const ProductDetail = () => {
  initMercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR"
  });
  return (
    <div>
      <NavBar />
      <div className='hidden md:flex'>a</div>
      <div className='md:mt-20 flex flex-col md:flex-row gap-5 shadow-xl md:mx-40 p-5'>
        <div className='flex flex-col gap-5 md:w-1/2'>
          <div className='w-full h-80 bg-slate-200'></div>
          <div className='flex gap-5'>
            <div className='w-40 h-40 bg-slate-200'></div>
            <div className='w-40 h-40 bg-slate-200'></div>
            <div className='w-40 h-40 bg-slate-200'></div>
          </div>
        </div>
        <div className='md:w-1/2 h-80 bg-slate-400 mb-14 md:mb-0'>
          <button>Comprar</button>
          <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail; 