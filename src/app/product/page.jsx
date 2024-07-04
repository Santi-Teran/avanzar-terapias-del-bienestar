import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Products from '@/components/Products';

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <div className='hidden md:flex'>a</div>
      <div className='my-20'>
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage;