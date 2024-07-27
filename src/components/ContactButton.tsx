import { Contact } from '../types'

const ContactButton = ({ name, logo, url }: Contact) => {
  return (
    <a
      href={url}
      className="flex items-center gap-4 p-4 bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
    >
      <img src={logo} alt={`${name} logo`} />
      <p>{name}</p>
    </a>
  )
}

export default ContactButton
