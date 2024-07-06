'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosMail } from "react-icons/io";
import { handleSubmit, isMercadoPago } from '@/api/handleSuccess';

const Success = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const preferenceIdFromUrl = new URLSearchParams(window.location.search).get('preference_id');
    if (preferenceIdFromUrl) {
      setPreferenceId(preferenceIdFromUrl);
      setShowForm(isMercadoPago());
    }
  }, []);

  return (
    <div className='bg-violet-200 flex flex-col md:flex-row items-center justify-center h-screen gap-20 p-5'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-4xl font-bold'>Compra exitosa!</h1>
        <Image src='/success.svg' alt='Success' width={500} height={100}/>
      </div>
      {showForm && (
        <form onSubmit={(event) => handleSubmit(event, email, setIsSubmitted, preferenceId)} className='flex flex-col gap-5'>
          <span className='text-2xl w-3/4 mx-auto text-center'>¿A dónde quieres que enviemos el libro?</span>
          <div className='flex items-center gap-2 bg-gray-100 shadow-xl px-4 py-2 rounded-full'>
            <IoIosMail className='text-violet-600 text-2xl' />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='ejemplo@gmail.com'
              className='text-gray-800 bg-transparent focus:outline-none'
            />
          </div>
          <button type="submit" className='w-full font-bold p-2 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-600 hover:text-white transition-all'>Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Success;