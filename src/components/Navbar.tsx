import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../store'
import { changeSection } from '../store/reducers/navbar'
import { useGetProfileDataQuery } from '../services/api'
import { updateInfos } from '../store/reducers/profileData'

const NavBar = () => {
  const [menuHamburger, setMeuHambuerger] = useState(true)

  const { sections } = useSelector((state: RootReducer) => state.navBar)
  const dispatch = useDispatch()
  const { data } = useGetProfileDataQuery()

  useEffect(() => {
    if (data) {
      dispatch(updateInfos(data))
    }
  }, [data, dispatch])

  return (
    <div className="fixed z-20 lg:bg-navBar w-screen bg-main-color select-none">
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
            className={`relative h-0.5 ${menuHamburger ? 'rotate-0 top-0' : 'rotate-[-135deg] top-[-12px]'}`}
          ></span>
        </div>
        <ul
          className={`${menuHamburger ? 'hidden relative ' : 'flex absolute top-[96px] left-0 pb-16 px-12 justify-center bg-main-color'}  sm:flex w-full h-24 sm:h-auto sm:max-w-[560px] md:max-w-[688px] lg:max-w-[896px] xl:max-w-[1152px] 2xl:max-w-[1408px] w-full sm:mx-auto md:px-0 transition-all duration-200 container  flex items-center flex-wrap gap-4 text-white font-bold [&_li]:transition-all`}
        >
          <li
            className={`${sections === 'home' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('home'))}
          >
            <HashLink to="#home">Inicio</HashLink>
          </li>
          <li
            className={`${sections === 'aboutMe' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('aboutMe'))}
          >
            <HashLink to="#aboutMe">Sobre mim</HashLink>
          </li>
          <li
            className={`${sections === 'skills' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('skills'))}
          >
            <HashLink to="#skills">Habilidades</HashLink>
          </li>
          <li
            className={`${sections === 'experiences' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('experiences'))}
          >
            <HashLink to="#experiences">Experiências</HashLink>
          </li>
          <li
            className={`${sections === 'projects' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('projects'))}
          >
            <HashLink to="#projects">Projetos</HashLink>
          </li>
          <li
            className={`${sections === 'contacts' ? 'text-section-active' : 'hover:text-section-active'}`}
            onClick={() => dispatch(changeSection('contacts'))}
          >
            <HashLink to="#contacts">Contato</HashLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
