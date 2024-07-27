import ContactButton from '../components/ContactButton'
import location from '../assets/icons/localizacao.png'
import { useGetContactsDataQuery } from '../services/api'

const Contact = () => {
  const { data } = useGetContactsDataQuery()
  if (data) {
    return (
      <div className="bg-main-color" id="contacts">
        <div className="container mx-auto px-10 pt-28 lg:px-16 h-full">
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
        </div>
      </div>
    )
  }
}

export default Contact
