const NavBar = () => {
  return (
    <div className="fixed  z-10 lg:bg-navBar w-screen bg-main-color ">
      <ul className="container mx-auto px-10 lg:px-16 flex items-center gap-4 min-h-24 text-white font-bold">
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
  )
}

export default NavBar
