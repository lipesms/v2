import brackets from '../assets/icons/brackets.png'
import server from '../assets/icons/server.png'
import colorPalette from '../assets/icons/color-palette.png'
import { SkillsType } from '../types'

type CardProps = {
  technology: 'Front-end' | 'Back-end' | 'Design'
  skills: SkillsType[]
}

const SkillCard = ({ technology, skills }: CardProps) => {
  return (
    <div className="p-4 rounded-2xl">
      <div className="flex items-center gap-4">
        <img
          src={
            technology === 'Design'
              ? colorPalette
              : technology === 'Back-end'
                ? server
                : brackets
          }
          alt=""
          className="w-10 md:w-12"
        />
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
          {technology}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-4 mt-8 text-white text-xl md:text-2xl font-bold lg:justify-center [&_div]:flex [&_div]:justify-between [&_li]:pt-4">
        {skills.map((e) => {
          console.log(typeof e.percent)
          return (
            <li className="p-4 w-fit rounded-xl bg-gray-20%" key={e.name}>
              {e.name}
            </li>
            // <li key={e.name}>
            //   <div>
            //     <h4>{e.name}</h4>
            //     <span>{e.percent}%</span>
            //   </div>
            //   <div className="h-1.5 w-full bg-gray-400 rounded-full">
            //     <span
            //       className={`block h-full bg-section-active rounded-full w-[${e.percent}%]`}
            //     ></span>
            //   </div>
            // </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillCard
