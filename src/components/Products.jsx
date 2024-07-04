'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProducts } from "@/api/api";
import { FaArrowRight } from "react-icons/fa";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const displayedProducts = limit ? products.slice(0, limit) : products;

  if (!displayedProducts) return <div className='h-20 my-40 bg-red-100'>Loading...</div>;


  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full">
        <h2 className="mx-8 md:mx-20 lg:mx-40 text-xl md:text-3xl font-semibold">Productos</h2>
        {limit && (
          <Link href="/product" className="flex items-center gap-2 mx-8 md:mx-20 lg:mx-40 border px-4 py-2 border-violet-600 rounded-full text-violet-500 hover:scale-110 hover:bg-violet-600 hover:text-white transition-all">
            <button className='font-semibold'>Ver Más</button>
            <FaArrowRight />
          </Link>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10">
        {displayedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="flex flex-col gap-4 shadow-xl p-4 rounded-lg hover:scale-110 transition-all cursor-pointer">
              <div className="w-60 h-80 bg-gray-200"></div>
              <h1>{product.name}</h1>
              <span>{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;