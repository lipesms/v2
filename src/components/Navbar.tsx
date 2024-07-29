import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../store'
import { changeSection } from '../store/reducers/navbar'

type Props = {
  className: boolean
}

const NavBar = ({ className }: Props) => {
  const [menuHamburger, setMeuHambuerger] = useState(true)

  const { sections } = useSelector((state: RootReducer) => state.navBar)
  const dispatch = useDispatch()

  return (
    <div
      className={`fixed z-20 w-screen select-none ${className ? 'bg-navBar' : 'bg-background'} transition-all duration-500`}
    >
      <div className="min-h-20 flex justify-end sm:justify-start px-10 mx-auto">
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
            className={`relative h-0.5 ${menuHamburger ? 'rotate-0 top-0' : 'rotate-[-135deg] top-[-12px]'}`}
          ></span>
        </div>
        <ul
          className={`${menuHamburger ? 'hidden relative ' : `flex absolute top-[78px] left-0 pb-16 px-12 justify-center ${className ? 'bg-navBar' : 'bg-background'}`}  sm:flex w-full h-24 sm:h-auto sm:max-w-[560px] md:max-w-[688px] lg:max-w-[896px] xl:max-w-[1152px] 2xl:max-w-[1408px] w-full sm:mx-auto md:px-0 transition-all duration-200 container  flex items-center flex-wrap gap-4 text-white font-bold [&_li]:transition-all transition-all duration-500`}
        >
          <li
            className={`${sections === 'home' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('home'))}
          >
            <HashLink to="#">Inicio</HashLink>
          </li>
          <li
            className={`${sections === 'aboutMe' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('aboutMe'))}
          >
            <HashLink to="#sobre">Sobre mim</HashLink>
          </li>
          <li
            className={`${sections === 'skills' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('skills'))}
          >
            <HashLink to="#tecnologias">Habilidades</HashLink>
          </li>
          <li
            className={`${sections === 'experiences' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('experiences'))}
          >
            <HashLink to="#experiencias">Experiências</HashLink>
          </li>
          <li
            className={`${sections === 'projects' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('projects'))}
          >
            <HashLink to="#projetos">Projetos</HashLink>
          </li>
          <li
            className={`${sections === 'contacts' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('contacts'))}
          >
            <HashLink to="#contato">Contato</HashLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
