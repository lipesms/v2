import HeroSocialLinks from '../components/HeroSocialLinks'

import welcomeCodeImage from '../assets/images/welcomeCode.png'
import { useGetApresentationDataQuery } from '../services/api'
import { useDispatch } from 'react-redux'
import { toogleOpenEmailMenu } from '../store/reducers/email'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { changeSection } from '../store/reducers/navbar'

const Hero = () => {
  const dispatch = useDispatch()
  const { data } = useGetApresentationDataQuery()

  const myRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(myRef, { once: false, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      dispatch(changeSection('home'))
    }
  }, [dispatch, isInView])

  if (data) {
    return (
      <div
        ref={myRef}
        className=" min-h-screen relative xl:h-screen lg:bg-transparent bg-hero-pattern"
      >
        <span className="-z-10 h-full w-full absolute top-0 left-0 bg-mobile-hero-image lg:bg-desktop-hero-image block bg-no-repeat bg-cover"></span>
        <section className="container mx-auto px-10 xl:px-16 flex flex-col gap-8 pt-32 justify-between w-full h-full xl:flex-row">
          <div
            className={`pt-4 order-last flex justify-center gap-6 [&_img]:max-w-10 [&_img]:xl:max-w-16 xl:flex-col xl:order-first xl:pt-0`}
          >
            {data.contacts.map((contact) => (
              <HeroSocialLinks
                logo={contact.logo}
                url={contact.url}
                name={contact.name}
                key={contact.logo}
              />
            ))}
          </div>
          <div className="flex flex-col items-center xl:items-start grow justify-center gap-6 text-white font-bold ">
            <h1 className="text-3xl text-center xl:text-5xl xl:text-start ">
              {data.headline}
            </h1>
            <span>
              {data.text.map((t, i) => (
                <p
                  className="md:text-xl text-center xl:w-4/5 xl:text-start"
                  key={i}
                >
                  {t}
                </p>
              ))}
            </span>

            <button
              className="px-4 py-4 text-xl bg-button-linear rounded-full cursor-pointer max-w-52 hover:shadow-[5px_5px_14px_0_#686868ad] hover:scale-110 transition-all duration-200"
              onClick={() => dispatch(toogleOpenEmailMenu())}
            >
              Entre em contato
            </button>
          </div>
          <div className="relative flex flex-col items-center justify-center animate-float translate-y-0">
            <img
              src={welcomeCodeImage}
              alt=""
              className="relative rounded-xl max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl shadow-[15px_10px_0px_0px_#FF79B4] md:shadow-[25px_20px_0px_0px_#FF79B4]  "
            />
          </div>
        </section>
      </div>
    )
  }
}

export default Hero
