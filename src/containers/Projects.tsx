import setaPraCima from '../assets/icons/seta-ta-cima.svg'
import react from '../assets/icons/react.png'
import typescript from '../assets/icons/typescript.png'
import tailwind from '../assets/icons/tailwind.png'

import trends from '../assets/images/trends.png'
import toDo from '../assets/images/toDo.png'

const projets = [
  {
    id: 1,
    nome: 'Trends',
    descricao:
      'O Trends é um site para quem deseja estar atualizado sobre as novas séries do momento, filmes e famosos, reunindo uma coletânea de informações de primeira para saber mais sobre seus conteúdos favoritos.',
    tecnologias: [react, typescript, tailwind],
    imagem: trends
  },
  {
    id: 2,
    nome: 'To do App',
    descricao:
      'O Trends é um site para quem deseja estar atualizado sobre as novas séries do momento, filmes e famosos, reunindo uma coletânea de informações de primeira para saber mais sobre seus conteúdos favoritos.',
    tecnologias: [react, typescript],
    imagem: toDo
  },
  {
    id: 3,
    nome: 'Trends',
    descricao:
      'O Trends é um site para quem deseja estar atualizado sobre as novas séries do momento, filmes e famosos, reunindo uma coletânea de informações de primeira para saber mais sobre seus conteúdos favoritos.',
    tecnologias: [react, typescript, tailwind],
    imagem: trends
  },
  {
    id: 4,
    nome: 'To do App',
    descricao:
      'O Trends é um site para quem deseja estar atualizado sobre as novas séries do momento, filmes e famosos, reunindo uma coletânea de informações de primeira para saber mais sobre seus conteúdos favoritos.',
    tecnologias: [react, typescript],
    imagem: toDo
  }
]

const Projects = () => {
  return (
    <div className="bg-main-color">
      <div className="container mx-auto px-10 pt-20 lg:px-16 h-full">
        <h2 className="text-white font-bold text-3xl">Projetos</h2>
        <div className="flex flex-col gap-16 text-white font-bold py-8 md:flex-row md:flex-wrap xl:py-20">
          {projets.map((project, index) => {
            const isOdd = index % 2 == 0
            return (
              <a
                key={project.id}
                href="#"
                className="group relative flex flex-col items-center md:w-5/12 xl:flex-row xl:w-full"
              >
                <div
                  className={`overlay relative flex flex-col gap-4 py-6 [&_*]:z-10 order-last ${isOdd ? 'xl:order-first' : 'xl:order-last xl:text-end'} xl:p-6`}
                >
                  <div className="relative flex gap-4 w-fit">
                    <h4 className="transition-all duration-200 text-3xl text-section-active">
                      {project.nome}
                    </h4>
                    <img
                      src={setaPraCima}
                      alt=""
                      className="absolute top-[5px] right-[-30px] group-hover:top-[0px] group-hover:right-[-35px] transition-all duration-200 w-6 group-hover:mb-8"
                    />
                  </div>
                  <p>{project.descricao}</p>
                  <span
                    className={`flex gap-4 [&_img]:max-h-8 [&_img]:xl:max-h-14 ${isOdd ? 'xl:justify-start' : 'xl:justify-end'}`}
                  >
                    {project.tecnologias.map((tecnologie) => (
                      <img key={tecnologie} src={tecnologie} alt="" />
                    ))}
                  </span>
                </div>
                <img
                  src={project.imagem}
                  alt=""
                  className="width-full rounded-2xl xl:w-1/2"
                />
                <span
                  className={`group-hover:w-full group-hover:h-full group-hover:translate-y-[0px] transition-all duration-200 hidden absolute top-0 ${isOdd ? 'left-0' : 'right-0'} translate-x-[0] translate-y-[30px] xl:block w-7/12 h-5/6 bg-[#1B1B1Bc7] rounded-xl`}
                ></span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
