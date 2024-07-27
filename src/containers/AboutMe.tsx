import profile from '../assets/images/profile.png'
import setaParaBaixo from '../assets/icons/seta-para-baixo.svg'

import { useGetAboutMeDataQuery } from '../services/api'

const AboutMe = () => {
  const { data } = useGetAboutMeDataQuery()

  if (data) {
    return (
      <div className="bg-main-color" id="aboutMe">
        <div className="container mx-auto px-10 pt-28 lg:px-16 h-full">
          <h2 className="text-3xl font-bold text-white">Sobre mim</h2>
          <div className="flex flex-col items-center py-8 xl:grid xl:grid-cols-2/5 xl:content-center xl:py-20">
            <img src={profile} alt="" className="md:w-1/2 xl:pe-10 xl:w-fit" />
            <div className="flex flex-col justify-center text-white font-bold">
              <ul className="flex justify-center gap-8 md:gap-12 [&_span]:text-section-active [&_span]:text-3xl [&_p]:text-xl [&_li]:text-center xl:justify-start">
                <li>
                  <span>{data.overlay.years}</span>
                  <p>Anos</p>
                </li>
                <li>
                  <span>{data.overlay.experienceYears}</span>
                  <p>Experiências</p>
                </li>
                <li>
                  <span>{data.overlay.projects}</span>
                  <p>Projetos</p>
                </li>
              </ul>
              <p className="text-md w-full md:text-lg text-center pt-8 pb-6 xl:text-start">
                {data.text}
              </p>
              <button className="flex self-center bg-section-active text-black py-4 px-4 rounded-full w-fit cursor-pointer hover:scale-110 transition-all duration-200">
                Baixar CV
                <img src={setaParaBaixo} className="max-h-6 ps-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
