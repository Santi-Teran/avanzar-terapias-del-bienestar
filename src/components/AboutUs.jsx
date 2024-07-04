import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-violet-600 text-white py-20 gap-10 md:px-20 px-8">
      <div className="md:w-1/2 flex flex-col gap-10 md:text-left text-center">
        <h2 className="text-xl md:text-3xl font-semibold">Sobre Nosotros!</h2>
        <p className="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis nesciunt iste libero. Ratione, non voluptates necessitatibus iusto eius esse soluta! Ratione magni corporis asperiores illo, ea animi quibusdam et! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, recusandae magnam id eveniet soluta quo nam est? Aperiam, facere nulla. Nulla voluptas ea quos inventore voluptate cupiditate repellat natus harum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam tempore cum illum non voluptate labore, quam aliquam quasi ratione repudiandae nam aspernatur dolorem animi! Laudantium quibusdam corporis tempora quos?</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image src="/about.svg" alt="About" width={400} height={10} />
      </div>
    </div>
  )
}

export default AboutUs;