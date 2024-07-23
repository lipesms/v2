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
            if (isOdd) {
              return (
                <div
                  key={project.id}
                  className="relative flex flex-col items-center md:w-5/12 xl:flex-row xl:w-full"
                >
                  <div className="relative flex flex-col gap-4 py-6 [&_*]:z-10 order-last xl:order-first xl:p-6">
                    <h4 className="text-3xl text-section-active">
                      {project.nome}
                    </h4>
                    <p>{project.descricao}</p>
                    <span className="flex gap-4 [&_img]:max-h-8 [&_img]:xl:max-h-14">
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
                  <span className="hidden absolute top-0 left-0 translate-x-[0] translate-y-[30px] xl:block w-7/12 h-5/6 bg-[#1B1B1Bc7] rounded-xl"></span>
                </div>
              )
            } else {
              return (
                <div
                  key={project.id}
                  className="relative flex flex-col items-center md:w-5/12 xl:flex-row xl:w-full"
                >
                  <div className="relative flex flex-col gap-4 py-6 [&_*]:z-10 order-last xl:text-end xl:p-6">
                    <h4 className="text-3xl text-section-active">
                      {project.nome}
                    </h4>
                    <p>{project.descricao}</p>
                    <span className="flex gap-4 [&_img]:max-h-8 [&_img]:xl:max-h-14 xl:justify-end">
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
                  <span className="hidden absolute top-0 right-0 translate-x-[0] translate-y-[30px] xl:block w-7/12 h-5/6 bg-[#1B1B1Bc7] rounded-xl"></span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
