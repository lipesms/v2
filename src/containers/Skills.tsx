import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { useGetSkillsDataQuery } from '../services/api'

const Skills = () => {
  const { data } = useGetSkillsDataQuery()
  if (data) {
    return (
      <section className="bg-main-color overflow-hidden" id="skills">
        <motion.div
          initial={{ opacity: 0, transform: 'translatex(200px)' }}
          whileInView={{ opacity: 1, transform: 'translatex(0)' }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="container mx-auto px-10 pt-28 lg:px-16 h-full"
        >
          <h2 className="text-white font-bold text-3xl">Habilidades</h2>
          <div className="flex flex-wrap gap-8 pt-8  md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-16 xl:pt-20">
            <SkillCard technology="Front-end" skills={data.frontend} />
            <SkillCard technology="Back-end" skills={data.backend} />
            <SkillCard technology="Design" skills={data.design} />
          </div>
        </motion.div>
      </section>
    )
  }
}

export default Skills
