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

  return (
    <form onSubmit={(e) => handleSubmit(e, data, setData, file, setFile, imageFile, setImageFile)}>
      <input type="text" name='name' value={data.name} onChange={(e) => handleChange(e, setData)} placeholder="Título" required />
      <textarea name='description' value={data.description} onChange={(e) => handleChange(e, setData)} placeholder="Descripción" required />
      <input type="number" name='price' value={data.price} onChange={(e) => handleChange(e, setData)} placeholder="Precio" required />
      <input type="file" name='file' accept=".pdf" onChange={(e) => handleFileChange(e, setFile)} required />
      <input type="file" name='imageFile' accept=".png" onChange={(e) => handleImageFileChange(e, setImageFile)} /> {/* Nuevo campo de carga de imágenes */}
      <button type="submit">Subir Producto</button>
    </form>
  );
};

export default UploadPDFForm;