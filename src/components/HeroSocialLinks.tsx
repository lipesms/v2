import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import whatsapp from '../assets/icons/whatsapp.png'

const HeroSocialLinks = () => {
  return (
    <div
      className={`pt-4 order-last flex justify-center gap-6 [&_img]:max-w-10 [&_img]:xl:max-w-16 xl:flex-col xl:order-first xl:pt-0`}
    >
      <a href="#">
        <img src={github} alt="" />
      </a>
      <a href="#">
        <img src={linkedin} alt="" />
      </a>
      <a href="#">
        <img src={whatsapp} alt="" />
      </a>
    </div>
  )
}

export default HeroSocialLinks
