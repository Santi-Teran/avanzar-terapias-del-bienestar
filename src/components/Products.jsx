'use client'
import { useEffect, useState } from 'react';
import { getProducts } from "@/api/api";
import Link from 'next/link';

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

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full">
        <h2 className="mx-12 md:mx-20 lg:mx-40">Productos</h2>
        {limit && (
          <Link href="/product">
            <button className="mx-12 md:mx-20 lg:mx-40 border">Ver Más</button>
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