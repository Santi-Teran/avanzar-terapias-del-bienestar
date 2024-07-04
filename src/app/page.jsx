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
      <div id="inicio">
        <Landing />
      </div>
      <div id="productos">
        <Products limit={4} />
      </div>
      <div id="nosotros">
        <AboutUs />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}