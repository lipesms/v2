import { useState } from 'react'

const NavBar = () => {
  const [menuHamburger, setMeuHambuerger] = useState(true)
  return (
    <div className="fixed z-20 lg:bg-navBar w-screen bg-main-color ">
      <div className="min-h-24 flex justify-end sm:justify-start px-10 mx-auto">
        <div
          className="sm:hidden relative menu-hamburger flex flex-col items-center justify-center [&_span]:block [&_span]:w-8 [&_span]:bg-gray-500 [&_span]:transition-all [&_span]:duration-200"
          onClick={() => setMeuHambuerger(!menuHamburger)}
        >
          <span
            className={`relative h-0.5 ${menuHamburger ? 'rotate-0' : 'rotate-[135deg]'}`}
          ></span>
          <span
            className={`relative h-0.5 my-1 ${menuHamburger ? 'opacity-100' : 'opacity-0'}`}
          ></span>
          <span
            className={`relative h-0.5 ${menuHamburger ? 'rotate-0 top-0' : 'rotate-[-135deg] top-[-10px]'}`}
          ></span>
        </div>
        <ul
          className={`${menuHamburger ? 'hidden relative ' : 'flex absolute top-[96px] left-0 pb-4 justify-center bg-main-color'}  sm:flex w-full h-20 sm:h-auto sm:max-w-[560px] md:max-w-[688px] lg:max-w-[896px] xl:max-w-[1152px] 2xl:max-w-[1408px] w-full sm:mx-auto md:px-0 transition-all duration-200 container  flex items-center flex-wrap gap-4 text-white font-bold [&_li]:transition-all`}
        >
          <li className="text-section-active">
            <a href="">Inicio</a>
          </li>
          <li className="hover:text-section-active">
            <a href="">Sobre mim</a>
          </li>
          <li className="hover:text-section-active">
            <a href="">Habilidades</a>
          </li>
          <li className="hover:text-section-active">
            <a href="">Experiências</a>
          </li>
          <li className="hover:text-section-active">
            <a href="">Projetos</a>
          </li>
          <li className="hover:text-section-active">
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
