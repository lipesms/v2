import { motion, useInView } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { useGetSkillsDataQuery } from '../services/api'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { changeSection } from '../store/reducers/navbar'

const Skills = () => {
  const { data } = useGetSkillsDataQuery()
  const dispatch = useDispatch()
  const myRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(myRef, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      dispatch(changeSection('skills'))
    }
  }, [dispatch, isInView])

  if (data) {
    return (
      <div
        ref={myRef}
        className="bg-main-color overflow-hidden"
        id="tecnologias"
      >
        <motion.section
          initial={{ opacity: 0, transform: 'translatex(200px)' }}
          whileInView={{ opacity: 1, transform: 'translatex(0)' }}
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-10 pt-28 lg:px-16 h-full"
        >
          <h2 className="text-white font-bold text-3xl">Habilidades</h2>
          <div className="flex flex-wrap gap-8 pt-8  md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-16 xl:pt-20">
            <SkillCard technology="Front-end" skills={data.frontend} />
            <SkillCard technology="Back-end" skills={data.backend} />
            <SkillCard technology="Design" skills={data.design} />
          </div>
        </motion.section>
      </div>
    )
  }
}

export default Skills
