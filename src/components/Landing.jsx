'use client';
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="md:mt-14">
      <div className="relative w-full h-96">
        <Image 
          src="/books.jpg" 
          alt="Libros" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-5">
            <h1 className="text-3xl md:text-5xl font-bold">Bienvenidos a Avanzar Terapias</h1>
            <p className="mt-2 text-lg md:text-xl">Descubre nuestra colección de libros y recursos!</p>
            <Link href="/product">
              <button className="mt-4 px-6 py-2 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-800 hover:scale-125 transition-all">
                Ver Productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;