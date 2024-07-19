const NavBar = () => {
  return (
    <div className="fixed  z-10 lg:bg-navBar w-screen bg-main-color ">
      <ul className="container mx-auto px-10 lg:px-16 flex items-center gap-4 min-h-24 text-white font-bold">
        <li className="text-sectionActive">
          <a href="">Inicio</a>
        </li>
        <li className="hover:text-sectionActive">
          <a href="">Sobre mim</a>
        </li>
        <li className="hover:text-sectionActive">
          <a href="">Habilidades</a>
        </li>
        <li className="hover:text-sectionActive">
          <a href="">Experiências</a>
        </li>
        <li className="hover:text-sectionActive">
          <a href="">Projetos</a>
        </li>
        <li className="hover:text-sectionActive">
          <a href="">Contato</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
