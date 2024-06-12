const Products = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2>Productos</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        <div className="flex flex-col gap-4 shadow-xl p-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <h1>Nombre del producto</h1>
          <span>$3000</span>
        </div>
        <div className="flex flex-col gap-4 shadow-xl p-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <h1>Nombre del producto</h1>
          <span>$3000</span>
        </div>
        <div className="flex flex-col gap-4 shadow-xl p-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <h1>Nombre del producto</h1>
          <span>$3000</span>
        </div>
        <div className="flex flex-col gap-4 shadow-xl p-4">
          <div className="w-60 h-60 bg-gray-200"></div>
          <h1>Nombre del producto</h1>
          <span>$3000</span>
        </div>
      </div>
  </div>
  )
}

export default Products;