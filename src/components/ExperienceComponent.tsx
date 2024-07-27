import { ExperiencesType } from '../types'

type Props = {
  experience: ExperiencesType
  isOdd: boolean
  isLast: boolean
}

const ExperienceComponent = ({ experience, isOdd, isLast }: Props) => {
  if (!isOdd) {
    return (
      <div
        key={experience.name}
        className="grid grid-cols-experiences gap-6 font-bold text-start xl:gap-8"
      >
        <div className="w-32 min-h-40 md:w-52">
          <h4 className="text-lg xl:text-xl text-white">{experience.name}</h4>
          <p className="text-md md:text-sm text-gray-500">{experience.local}</p>
          <p className="text-md md:text-sm text-gray-500">
            {experience.company}
          </p>
          <p className={`text-xs  text-section-active ${isLast ? '' : 'mb-6'}`}>
            {experience.date.start} - {experience.date.end}
          </p>
        </div>
        <div className="relative">
          <span className="block bg-section-active w-4 h-4 rounded-full"></span>
          <span
            className={`block w-px h-full translate-x-[7px] bg-section-active ${isLast ? 'hidden' : 'block'}`}
          ></span>
        </div>
        <div></div>
      </div>
    )
  } else {
    return (
      <div
        key={experience.name}
        className="grid grid-cols-experiences gap-6 font-bold text-start xl:gap-8"
      >
        <div className="w-32 min-h-40 md:w-52"></div>
        <div className="order-last w-32 md:w-52">
          <h4 className="text-lg md:text-xl text-white">{experience.name}</h4>
          <p className="text-sm text-gray-500">{experience.local}</p>
          <p className="text-sm text-gray-500">{experience.company}</p>
          <p className={`text-xs  text-section-active ${isLast ? '' : 'mb-6'}`}>
            {experience.date.start} - {experience.date.end}
          </p>
        </div>
        <div className="relative">
          <span className="block bg-section-active w-4 h-4 rounded-full"></span>
          <span
            className={`block w-px h-full translate-x-[7px] bg-section-active ${isLast ? 'hidden' : 'block'}`}
          ></span>
        </div>
      </div>
    )
  }
}

export default ExperienceComponent
