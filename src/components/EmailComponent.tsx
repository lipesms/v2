import { useDispatch, useSelector } from 'react-redux'
import emailjs from '@emailjs/browser'

import { RootReducer } from '../store'
import { toogleOpenEmailMenu } from '../store/reducers/email'
import { FormEvent, useState } from 'react'

const EmailComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sented, setSented] = useState(false)
  const { isOpen } = useSelector((state: RootReducer) => state.email)

  const dispatch = useDispatch()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs
      .send(
        'service_yb1nckl',
        'template_7wzq3lj',
        templateParams,
        'tcncOD4iQHSLiTPDL'
      )
      .then((response) => {
        console.log('email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setSented(true)
      })
  }

  return (
    <div
      className={`${isOpen ? 'flex' : 'hidden'} fixed z-30 top-0 right-0 w-full h-screen justify-center items-center`}
    >
      <span
        className="absolute z-30 block w-full h-screen bg-overlay-email"
        onClick={() => dispatch(toogleOpenEmailMenu())}
      ></span>
      <form
        method="post"
        className={`${sented ? 'hidden' : 'flex'} z-40  flex-col gap-6 p-8 bg-email-pattern rounded-2xl text-lg md:min-w-100 text-white`}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center font-bold text-3xl">Contato</h3>
        <div className="flex items-end">
          <label className="font-bold border-b pe-2">Nome:</label>
          <input
            name="name"
            type="text"
            className="grow outline-0 border-b bg-transparent"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="flex items-end">
          <label className="font-bold border-b pe-2">E-mail:</label>
          <input
            name="email"
            type="email"
            className="grow outline-0 border-b bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Mensagem:</label>
          <textarea
            name="message"
            rows={5}
            className="p-2 outline-0 rounded-lg border bg-transparent"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <div className="self-end">
          <button
            className="p-2 text-lg me-4 bg-red rounded-lg te"
            type="reset"
            value="clean"
            onClick={() => dispatch(toogleOpenEmailMenu())}
          >
            Cancelar
          </button>
          <button
            className="p-2 text-lg bg-green rounded-lg"
            type="submit"
            value="enviar"
          >
            Enviar
          </button>
        </div>
      </form>
      <div
        className={`${sented ? 'flex' : 'hidden'} z-40 relative flex-col gap-6 mx-10 p-10 md:p-20 bg-email-pattern rounded-2xl text-lg md:min-w-100 text-white`}
      >
        <p className="text-3xl font-bold text-center">
          Obrigado pela mensagem!
        </p>
        <p className="text-center">Em breve entrarei em contato. 😉</p>
        <button
          className="absolute top-[16px] right-[24px] text-2xl"
          onClick={() => dispatch(toogleOpenEmailMenu())}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default EmailComponent
