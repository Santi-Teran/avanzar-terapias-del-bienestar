'use client';
import { useEffect, useState } from "react";
import { FaEdit } from 'react-icons/fa';
import { handleEditClick, handleEditSubmit, handleEditChange } from '../api/handleEdit';
import { getDashboardProducts } from "../api/api";

const ServiceTable = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ id: '', name: '', description: '', price: '', dataUrl: '', imageUrl: '', isActive: true });

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const productsData = await getDashboardProducts(token);
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-10">
      <div className="overflow-x-auto">
        <div className="bg-white shadow-md rounded mb-20">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nombre</th>
                <th className="py-3 px-6 text-left">Descripcion</th>
                <th className="py-3 px-6 text-left">Precio</th>
                <th className="py-3 px-6 text-left">Estado</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {products.map(product => (
                editing === product.id ? (
                  <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={(e) => handleEditChange(e, setEditData)}
                        className="py-2 px-4 rounded-lg text-black w-40"
                      />
                    </td>
                    <td className="py-3 px-6 text-left">
                      <input
                        type="text"
                        name="description"
                        value={editData.description}
                        onChange={(e) => handleEditChange(e, setEditData)}
                        className="py-2 px-4 rounded-lg text-black w-40"
                      />
                    </td>
                    <td className="py-3 px-6 text-left">
                      <input
                        type="text"
                        name="price"
                        value={editData.price}
                        onChange={(e) => handleEditChange(e, setEditData)}
                        className="py-2 px-4 rounded-lg text-black w-40"
                      />
                    </td>
                    <td className="py-3 px-6 text-left">
                      <select
                        name="isActive"
                        value={editData.isActive}
                        onChange={(e) => handleEditChange(e, setEditData)}
                        className="py-2 px-4 rounded-lg text-black w-40"
                      >
                        <option value={true}>Activo</option>
                        <option value={false}>Inactivo</option>
                      </select>
                    </td>
                    <td className="py-3 px-6 flex gap-2 justify-center">
                      <button
                        onClick={(e) => handleEditSubmit(e, editData, setEditing, setProducts)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                      >
                        Guardar
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setEditing(null)}>Cancelar</button>
                    </td>
                  </tr>
                ) : (
                  <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">{product.name}</td>
                    <td className="py-3 px-6 text-left">{product.description}</td>
                    <td className="py-3 px-6 text-left">$ {product.price}</td>
                    <td className="py-3 px-6 text-left">{product.isActive ? 'Activo' : 'Inactivo'}</td>
                    <td className="py-3 px-6 text-center flex gap-5 justify-center">
                      <button onClick={() => handleEditClick(product, setEditing, setEditData)} className="text-blue-500 text-xl">
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;