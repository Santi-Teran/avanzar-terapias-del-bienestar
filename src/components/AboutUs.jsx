import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-violet-600 text-white py-20 gap-10 md:px-20 px-8">
      <div className="md:w-1/2 flex flex-col gap-4 md:text-left text-center">
        <h2 className="text-xl md:text-3xl font-semibold">Sobre Nosotros</h2>
        <p className="md:text-lg">
          En Avanzar Terapias del Bienestar, nos dedicamos a ofrecer una amplia gama de servicios diseñados para ayudarte a alcanzar un bienestar integral y una vida más equilibrada. Nuestro enfoque combina técnicas avanzadas y métodos holísticos para abordar tus necesidades específicas y potenciar tu desarrollo personal.
        </p>
        <h3 className="text-lg md:text-2xl font-semibold">Nuestros Servicios</h3>
        <p className="md:text-lg">
          <strong>Biodescodificación:</strong> Te ayudamos a comprender y resolver conflictos emocionales y físicos a través del estudio de las emociones ocultas y su impacto en tu salud.
        </p>
        <p className="md:text-lg">
          <strong>Reprogramación Cuántica:</strong> Utilizamos técnicas de vanguardia para reprogramar patrones de pensamiento limitantes, permitiéndote alcanzar tus metas y vivir una vida más plena.
        </p>
        <p className="md:text-lg">
          <strong>Armonización y Limpieza Energética:</strong> Restauramos el equilibrio y la armonía de tu energía, eliminando bloqueos y mejorando tu bienestar general.
        </p>
        <p className="md:text-lg">
          <strong>Reprogramación Neurolaboral:</strong> Transformamos tu entorno laboral y tu mentalidad para mejorar tu rendimiento y satisfacción profesional.
        </p>
        <p className="md:text-lg">
          <strong>Constelaciones Familiares Cuánticas:</strong> Exploramos y resolvemos dinámicas familiares inconscientes que pueden estar afectando tu vida actual, permitiéndote sanar y avanzar.
        </p>
        <p className="md:text-lg">
          Nuestro equipo de profesionales está comprometido con tu crecimiento y bienestar. Creemos en un enfoque integral que abarca cuerpo, mente y espíritu, y estamos aquí para guiarte en cada paso de tu camino hacia una vida más equilibrada y satisfactoria.
        </p>
        <h3 className="text-lg md:text-2xl font-semibold">¿Por Qué Elegirnos?</h3>
        <p className="md:text-lg">
          En Avanzar Terapias del Bienestar, nos destacamos por nuestra dedicación, profesionalismo y pasión por el bienestar integral. Nos comprometemos a ofrecerte un servicio personalizado y efectivo, adaptado a tus necesidades únicas.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image src="/about.svg" alt="About" width={400} height={10} />
      </div>
    </div>
  )
}

export default AboutUs;