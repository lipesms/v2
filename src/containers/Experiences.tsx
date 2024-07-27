const experiences = [
  {
    nome: 'Análise de desenvolvimento de sistemas',
    local: 'São Paulo - SP',
    empresa: 'UNIP',
    datas: {
      inicio: '02/2018',
      fim: '01/2020'
    }
  },
  {
    nome: 'Javascript funcional e reativo',
    local: 'São Paulo - SP',
    empresa: 'Udemy',
    datas: {
      inicio: '02/2018',
      fim: '01/2020'
    }
  },
  {
    nome: 'Desenvolvedor FullStack Python',
    local: 'São Paulo - SP',
    empresa: 'EBAC',
    datas: {
      inicio: '02/2018',
      fim: '01/2020'
    }
  }
]

const Experiences = () => {
  return (
    <div className="bg-main-color" id="experiences">
      <div className="container mx-auto px-10 pt-28 lg:px-16 h-full ">
        <h2 className="text-white font-bold text-3xl">Experiências</h2>
        <div className="[&_button]:text-2xl [&_button]:xl:text-3xl [&_button]:font-bold [&_button]:me-4 py-8 xl:py-20">
          <div className="w-fit m-auto my-8 xl:mb-24 [&_button]:transition-all [&_button]:duration-200">
            <button className="text-section-active hover:text-section-active">
              Acadêmicas
            </button>
            <button className="text-white hover:text-section-active">
              Profissionais
            </button>
          </div>
          <div className="m-auto w-fit">
            {experiences.map((experience, index) => {
              const last = index + 1 === experiences.length
              const isOdd = index % 2 > 0
              if (!isOdd) {
                return (
                  <div
                    key={experience.nome}
                    className="grid grid-cols-experiences gap-6 font-bold text-start xl:gap-8"
                  >
                    <div className="w-32 min-h-40 md:w-52">
                      <h4 className="text-lg xl:text-xl text-white">
                        {experience.nome}
                      </h4>
                      <p className="text-md md:text-sm text-gray-500">
                        {experience.local}
                      </p>
                      <p className="text-md md:text-sm text-gray-500">
                        {experience.empresa}
                      </p>
                      <p
                        className={`text-xs  text-section-active ${last ? '' : 'mb-6'}`}
                      >
                        {experience.datas.inicio} - {experience.datas.fim}
                      </p>
                    </div>
                    <div className="relative">
                      <span className="block bg-section-active w-4 h-4 rounded-full"></span>
                      <span
                        className={`block w-px h-full translate-x-[7px] bg-section-active ${last ? 'hidden' : 'block'}`}
                      ></span>
                    </div>
                    <div></div>
                  </div>
                )
              } else {
                return (
                  <div
                    key={experience.nome}
                    className="grid grid-cols-experiences gap-6 font-bold text-start xl:gap-8"
                  >
                    <div className="w-32 min-h-40 md:w-52"></div>
                    <div className="order-last w-32 md:w-52">
                      <h4 className="text-lg md:text-xl text-white">
                        {experience.nome}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {experience.local}
                      </p>
                      <p className="text-sm text-gray-500">
                        {experience.empresa}
                      </p>
                      <p
                        className={`text-xs  text-section-active ${last ? '' : 'mb-6'}`}
                      >
                        {experience.datas.inicio} - {experience.datas.fim}
                      </p>
                    </div>
                    <div className="relative">
                      <span className="block bg-section-active w-4 h-4 rounded-full"></span>
                      <span
                        className={`block w-px h-full translate-x-[7px] bg-section-active ${last ? 'hidden' : 'block'}`}
                      ></span>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
