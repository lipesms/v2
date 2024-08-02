import { useDispatch } from 'react-redux'
import { toogleOpenEmailMenu } from '../store/reducers/email'
import { Contact } from '../types'

const ContactButton = ({ name, logo, url }: Contact) => {
  const dispatch = useDispatch()
  if (name != 'Email') {
    return (
      <a
        href={url}
        target="_blank"
        className="flex items-center gap-4 p-4 bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
        rel="noreferrer"
      >
        <img src={logo} alt={`${name} logo`} />
        <p>{name}</p>
      </a>
    )
  }
  return (
    <button
      className="flex items-center gap-4 p-4 bg-gray-500 rounded-2xl hover:bg-[#ff79b4] transition-all duration-200"
      onClick={() => dispatch(toogleOpenEmailMenu())}
    >
      <img src={logo} alt={`${name} logo`} />
      <p>{name}</p>
    </button>
  )
}

export default ContactButton
