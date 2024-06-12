import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <NavBar />
      <Landing />
      <Products />
      <Contact />
      <AboutUs />
      <Footer />
    </div>
  );
}
