'use client';
import { handleChange, handleFileChange, handleSubmit } from '@/api/products';
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

  return (
    <form onSubmit={(e) => handleSubmit(e, data, setData, file, setFile)}>
      <input type="text" name='name' value={data.name} onChange={(e) => handleChange(e, setData)} placeholder="Título" required />
      <textarea name='description' value={data.description} onChange={(e) => handleChange(e, setData)} placeholder="Descripción" required />
      <input type="number" name='price' value={data.price} onChange={(e) => handleChange(e, setData)} placeholder="Precio" required />
      <input type="file" name='file' accept=".pdf" onChange={(e) => handleFileChange(e, setFile)} required />
      <button type="submit">Subir Producto</button>
    </form>
  );
};

export default UploadPDFForm;