import { useState } from 'react'
import { useGetExperiencesDataQuery } from '../services/api'
import ExperienceComponent from '../components/ExperienceComponent'

const Experiences = () => {
  const [infos, setInfos] = useState('academics')

  const { data } = useGetExperiencesDataQuery()

  if (data) {
    return (
      <div className="bg-main-color" id="experiences">
        <div className="container mx-auto px-10 pt-28 lg:px-16 h-full ">
          <h2 className="text-white font-bold text-3xl">Experiências</h2>
          <div className="[&_button]:text-2xl [&_button]:xl:text-3xl [&_button]:font-bold [&_button]:me-4 pt-8 xl:pt-20">
            <div className="flex w-fit m-auto my-8 xl:mb-24 [&_button]:transition-all [&_button]:duration-200 ">
              <button
                className={`${infos === 'academics' ? 'text-section-active' : 'text-white'} hover:text-section-active transition-all`}
                onClick={() => setInfos('academics')}
              >
                Acadêmicas
              </button>
              <button
                className={`${infos === 'professionals' ? 'text-section-active' : 'text-white'} hover:text-section-active transition-all`}
                onClick={() => setInfos('professionals')}
              >
                Profissionais
              </button>
            </div>
            <div className="m-auto w-fit">
              {infos === 'academics'
                ? data.academics.map((experience, index) => {
                    const isLast = index + 1 === data.academics.length
                    const isOdd = index % 2 > 0
                    return (
                      <ExperienceComponent
                        key={experience.name}
                        experience={experience}
                        isLast={isLast}
                        isOdd={isOdd}
                      />
                    )
                  })
                : data.professionals.map((experience, index) => {
                    const isLast = index + 1 === data.professionals.length
                    const isOdd = index % 2 > 0
                    return (
                      <ExperienceComponent
                        key={experience.name}
                        experience={experience}
                        isLast={isLast}
                        isOdd={isOdd}
                      />
                    )
                  })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experiences
