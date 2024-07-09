'use client';
import { handleChange, handleFileChange, handleImageFileChange, handleSubmit } from '@/api/handleUpload';
import { useState } from 'react';

const UploadPDFForm = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    dataUrl: '',
    imageUrl: '',
    isActive: true
  });

  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});

  return (
    <div className="w-80 md:w-[600px] mx-auto p-4 md:p-10">
      <div className="bg-gray-100 shadow-md rounded mt-5 mb-20 p-5">
        <h1 className="text-center text-2xl font-bold mb-5 text-gray-600">AGREGAR SERVICIO</h1>
        <form className='flex flex-col gap-5' onSubmit={(e) => handleSubmit(e, data, setData, file, setFile, imageFile, setImageFile)}>
          <div className="flex flex-col gap-2">
            <label>Titulo</label>
            <input 
              type="text" 
              name='name' 
              value={data.name} 
              onChange={(e) => handleChange(e, setData)} 
              placeholder="Ej: Avanzar Terapia" 
              required 
              className="py-2 px-4 rounded-lg text-black"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Descripcion</label>
            <textarea
              name='description' 
              value={data.description} 
              onChange={(e) => handleChange(e, setData)} 
              placeholder="Ej: Descripción del libro" 
              required 
              className="py-2 px-4 rounded-lg text-black"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Precio</label>
            <input 
              type="text" 
              name='price' 
              value={data.price} 
              onChange={(e) => handleChange(e, setData)} 
              placeholder="Ej: 3000" 
              required 
              className="py-2 px-4 rounded-lg text-black"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Seleccione PDF</label>
            <input 
              type="file" 
              name='file' 
              accept=".pdf" 
              onChange={(e) => handleFileChange(e, setFile)} 
              required 
              className=""
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Seleccione imagen de portada</label>
            <input 
              type="file" 
              name='imageFile' 
              accept=".png" 
              onChange={(e) => handleImageFileChange(e, setImageFile)} 
              required 
              className=""
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <button type="submit" className="py-2 px-4 rounded-lg bg-violet-500 text-white">
            Subir Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPDFForm;