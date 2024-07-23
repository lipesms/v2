import github from '../assets/icons/github_white.png'
import email from '../assets/icons/email_white.png'
import linkedin from '../assets/icons/linkedin_white.png'
import location from '../assets/icons/localizacao.png'

const Contact = () => {
  return (
    <div className="bg-main-color ">
      <div className="container mx-auto px-10 pt-20 lg:px-16 h-full">
        <h2 className="text-white font-bold text-3xl">Contato</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col grow gap-4 [&_img]:w-11 [&_img]:xl:w-11 text-white font-bold text-2xl py-8 xl:text-3xl xl:py-20">
            <a
              href="https://github.com/lipesms"
              className="flex items-center gap-4 p-4 bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
            >
              <img src={github} alt="" />
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/lipesms"
              className="flex items-center gap-4 p-4  bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
            >
              <img src={linkedin} alt="" />
              <p>Linkedin</p>
            </a>
            <a
              href="femartins2010@gmail.com"
              className="flex items-center gap-4 p-4  bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
            >
              <img src={email} alt="" />
              <p>E-mail</p>
            </a>
          </div>
          <div className="flex items-start justify-end grow  text-section-active font-bold py-8 xl:py-20">
            <div className="flex items-center gap-4">
              <img src={location} alt="" className="w-14 md:16" />
              <span>
                <h5 className="text-2xl md:text-3xl">Localização</h5>
                <p className="text-lg md:text-xl">São Paulo - SP</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
