import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:px-20 px-8">
      <div className="md:w-1/2 flex justify-center">
        <Image src="/contact.svg" alt="Contact" width={400} height={10} />
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 md:text-left text-center">
        <h3>¿Tienes alguna pregunta?</h3>
        <h2 className="text-xl md:text-3xl font-semibold">¡Contáctanos!</h2>
        <p className="md:text-lg">
          Si estás listo para transformar tu vida y alcanzar un bienestar integral, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte a descubrir tu mejor versión.
        </p>
        <div className="flex text-xl gap-4">
          <div className="flex items-center gap-2 border px-4 py-2 border-violet-600 rounded-full text-violet-500 hover:scale-110 hover:bg-violet-600 hover:text-white transition-all">
            <FaWhatsapp />
            <button>Escríbenos</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Contact;