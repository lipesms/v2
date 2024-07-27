import SkillCard from '../components/SkillCard'

const front = [
  {
    name: 'HTML',
    percent: 90
  },
  {
    name: 'CSS',
    percent: 85
  },
  {
    name: 'Javascript',
    percent: 80
  },
  {
    name: 'Typescript',
    percent: 75
  },
  {
    name: 'Bootstrap',
    percent: 80
  },
  {
    name: 'React',
    percent: 75
  },
  {
    name: 'Jest',
    percent: 65
  },
  {
    name: 'Gulp',
    percent: 60
  },
  {
    name: 'Git',
    percent: 75
  }
]
const back = [
  {
    name: 'Python',
    percent: 35
  },
  {
    name: 'Node',
    percent: 25
  },
  {
    name: 'Npm',
    percent: 75
  },
  {
    name: 'MySql',
    percent: 65
  }
]
const design = [
  {
    name: 'Figma',
    percent: 80
  },
  {
    name: 'Photoshop',
    percent: 40
  },
  {
    name: 'Canva',
    percent: 80
  }
]

const Skills = () => {
  return (
    <div className="bg-main-color" id="skills">
      <div className="container mx-auto px-10 pt-28 lg:px-16 h-full">
        <h2 className="text-white font-bold text-3xl">Habilidades</h2>
        <div className="flex flex-col gap-8 py-8  md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-16 xl:py-20">
          <SkillCard technology="Front-end" techsPercents={front} />
          <SkillCard technology="Back-end" techsPercents={back} />
          <SkillCard technology="Design" techsPercents={design} />
        </div>
      </div>
    </div>
  )
}

export default Skills
