import SkillCard from '../components/SkillCard'
import { useGetSkillsDataQuery } from '../services/api'

const Skills = () => {
  const { data } = useGetSkillsDataQuery()
  if (data) {
    return (
      <div className="bg-main-color" id="skills">
        <div className="container mx-auto px-10 pt-28 lg:px-16 h-full">
          <h2 className="text-white font-bold text-3xl">Habilidades</h2>
          <div className="flex flex-wrap gap-8 pt-8  md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-16 xl:pt-20">
            <SkillCard technology="Front-end" skills={data.frontend} />
            <SkillCard technology="Back-end" skills={data.backend} />
            <SkillCard technology="Design" skills={data.design} />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
