import brackets from '../assets/icons/brackets.png'
import server from '../assets/icons/server.png'
import colorPalette from '../assets/icons/color-palette.png'

type TechPercent = {
  name: string
  percent: number
}

type CardProps = {
  technology: 'Front-end' | 'Back-end' | 'Design'
  techsPercents: TechPercent[]
}

const SkillCard = ({ technology, techsPercents }: CardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-gray-20%">
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
          className="w-12"
        />
        <h3 className="text-white text-3xl font-bold text-center">
          {technology}
        </h3>
      </div>
      <ul className="text-white text-2xl font-bold [&_div]:flex [&_div]:justify-between [&_li]:pt-4">
        {techsPercents.map((e) => (
          <li key={e.name}>
            <div>
              <h4>{e.name}</h4>
              <span>{e.percent}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-400 rounded-full">
              <span className="h-full w-[90%] bg-section-active rounded-full"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard
