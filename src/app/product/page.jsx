import NavBar from '@/components/Navbar';
import Products from '@/components/Products';

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <div className='hidden md:flex'>a</div>
      <div className='mt-20'>
      <Products />
      </div>
    </div>
  )
}

export default ProductsPage;