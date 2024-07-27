import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../store'
import { toogleOpenEmailMenu } from '../store/reducers/email'

const EmailComponent = () => {
  const key = '50967bea-35ef-45bf-828c-607a23dfca2b'
  const { isOpen } = useSelector((state: RootReducer) => state.email)

  const dispatch = useDispatch()

  console.log(isOpen)

  return (
    <div
      className={`${isOpen ? 'flex' : 'hidden'} fixed z-30 top-0 right-0 w-full h-screen justify-center items-center`}
    >
      <span
        className="absolute z-30 block w-full h-screen bg-overlay-email"
        onClick={() => dispatch(toogleOpenEmailMenu())}
      ></span>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        className="z-40 flex flex-col gap-6 p-8 bg-buttonLinear rounded-2xl text-lg md:min-w-96"
      >
        <h3 className="text-center font-bold text-3xl text-white">Contato</h3>
        <input
          name="name"
          type="text"
          placeholder="Nome"
          className="p-2 outline-0 rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          className="p-2 outline-0 rounded-lg"
        />
        <textarea
          name="message"
          rows={5}
          className="p-2 outline-0 rounded-lg"
          placeholder="Escreva sua mensagem"
        ></textarea>
        <div className="self-end">
          <button
            className="p-2 text-lg me-4 bg-red rounded-lg te"
            type="reset"
            value="clean"
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
        <input type="hidden" name="accessKey" value={key}></input>
      </form>
    </div>
  )
}

export default EmailComponent
