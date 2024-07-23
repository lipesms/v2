import HeroSocialLinks from '../components/HeroSocialLinks'

import welcomeCodeImage from '../assets/images/welcomeCode.png'

const Hero = () => {
  return (
    <div className="relative bg-main-color pb-16 xl:h-screen  lg:bg-transparent lg:bg-hero-pattern ">
      <span className="-z-10 h-full w-full absolute top-0 left-0 bg-hero-image block lg:bg-no-repeat lg:bg-cover"></span>
      <div className="container mx-auto px-10 xl:px-16 flex flex-col gap-8 pt-32 justify-between w-full h-full xl:flex-row">
        <HeroSocialLinks />
        <div className="flex flex-col items-center xl:items-start grow justify-center gap-6 text-white font-bold ">
          <h1 className="text-3xl text-center xl:text-5xl xl:text-start ">
            Olá! Me chamo Felipe Martins, prazer em te conhecer!
          </h1>
          <p className="text-xl text-center xl:w-4/5 xl:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat varius imperdiet. In at congue lorem. Curabitur porttitor
            sem ac massa ultricies, lacinia feugiat eros molestie. Donec egestas
            est mattis, cursus libero nec, bibendum tortor. Phasellus at nunc at
            est suscipit interdum.
          </p>
          <button className="px-4 py-4 text-xl bg-buttonLinear rounded-full cursor-pointer max-w-52 hover:shadow-[5px_5px_14px_0_#686868ad] hover:scale-110 transition-all duration-200">
            Entre em contato
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img
            src={welcomeCodeImage}
            alt=""
            className="relative rounded-xl max-w-full lg:max-w-xl shadow-[18px_20px_7px_0px_#FF79B4]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
