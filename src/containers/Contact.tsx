import { motion, useInView } from 'framer-motion'
import ContactButton from '../components/ContactButton'
import location from '../assets/icons/localizacao.png'
import { useGetContactsDataQuery } from '../services/api'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { changeSection } from '../store/reducers/navbar'

const Contact = () => {
  const { data } = useGetContactsDataQuery()

  const dispatch = useDispatch()
  const myRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(myRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      dispatch(changeSection('contacts'))
    }
  }, [dispatch, isInView])

  if (data) {
    return (
      <div ref={myRef} className="bg-main-color overflow-hidden" id="contato">
        <motion.section
          initial={{ opacity: 0, transform: 'translatex(-100px)' }}
          whileInView={{ opacity: 1, transform: 'translatex(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          className="container mx-auto px-10 pt-28 lg:px-16 h-full"
        >
          <h2 className="text-white font-bold text-3xl">Contato</h2>
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col grow gap-4 [&_img]:w-11 [&_img]:xl:w-11 text-white font-bold text-2xl py-8 xl:text-3xl xl:py-20">
              {data.map((contact) => (
                <ContactButton
                  key={contact.name}
                  name={contact.name}
                  logo={contact.logo}
                  url={contact.url}
                />
              ))}
            </div>
            <div className="flex items-start justify-end grow  text-section-active font-bold py-8 xl:py-20">
              <div className="flex items-center gap-4">
                <img src={location} alt="" className="w-14 md:16" />
                <span>
                  <h5 className="text-2xl md:text-3xl">Localização</h5>
                  <p className="text-lg md:text-xl">São Paulo - SP</p>
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    )
  }
}

export default Contact
