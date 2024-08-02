import { motion, useInView } from 'framer-motion'
import setaPraCima from '../assets/icons/seta-ta-cima.svg'
import { useGetProjectsDataQuery } from '../services/api'
import { changeSection } from '../store/reducers/navbar'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

const Projects = () => {
  const { data } = useGetProjectsDataQuery()

  const dispatch = useDispatch()
  const myRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(myRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      dispatch(changeSection('projects'))
    }
  }, [dispatch, isInView])

  if (data) {
    return (
      <div ref={myRef} className="bg-main-color overflow-hidden" id="projetos">
        <motion.section
          initial={{ opacity: 0, transform: 'translatex(200px)' }}
          whileInView={{ opacity: 1, transform: 'translatex(0)' }}
          viewport={{ once: true, amount: 0.07 }}
          className="container mx-auto px-10 pt-28 lg:px-16 h-full"
        >
          <h2 className="text-white font-bold text-2xl md:text-3xl">
            Projetos
          </h2>
          <div className="flex flex-col gap-16 text-white font-bold pt-8 md:flex-row md:flex-wrap xl:pt-20">
            {data.map((project, index) => {
              const isOdd = index % 2 == 0
              return (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  className="group relative flex flex-col items-center md:w-5/12 xl:flex-row xl:w-full"
                  rel="noreferrer"
                >
                  <div
                    className={`overlay relative flex flex-col gap-4 py-6 [&_*]:z-10 order-last ${isOdd ? 'xl:order-first' : 'xl:order-last xl:text-end'} xl:p-6`}
                  >
                    <div className="relative flex gap-4 w-fit">
                      <h4 className="transition-all duration-200 text-3xl text-section-active">
                        {project.name}
                      </h4>
                      <img
                        src={setaPraCima}
                        alt=""
                        className="absolute top-[5px] right-[-30px] group-hover:top-[0px] group-hover:right-[-35px] transition-all duration-200 w-6 group-hover:mb-8"
                      />
                    </div>
                    <p>{project.description}</p>
                    <span
                      className={`flex gap-4 [&_img]:max-h-8 [&_img]:xl:max-h-14 ${isOdd ? 'xl:justify-start' : 'xl:justify-end'}`}
                    >
                      {project.technologies.map((tecnologie) => (
                        <img key={tecnologie} src={tecnologie} alt="" />
                      ))}
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt=""
                    className="width-full rounded-2xl xl:w-1/2"
                  />
                  <span
                    className={`group-hover:w-full group-hover:h-full group-hover:translate-y-[0px] transition-all duration-200 hidden absolute top-0 ${isOdd ? 'left-0' : 'right-0'} translate-x-[0] translate-y-[30px] xl:block w-7/12 h-5/6 bg-[#0000003b] rounded-xl`}
                  ></span>
                </a>
              )
            })}
          </div>
        </motion.section>
      </div>
    )
  }
}

export default Projects
