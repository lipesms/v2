const Footer = () => {
  return (
    <div className="bg-main-color" id="footer">
      <div className="flex flex-col container mx-auto px-10 lg:px-16 h-full text-[#949494] font-bold text-sm py-16 xl:py-32 xl:flex-row xl:justify-between">
        <p className="w-full xl:w-1/2">
          Projetado no{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://www.figma.com/"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>{' '}
          e codificado no{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visual studio code.
          </a>{' '}
          Desenvolvido com{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{' '}
          e{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            Typescript
          </a>
          , deploy pela{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
          . Todos os textos utilizando Roboto e ícones pela{' '}
          <a
            className="text-gray-600 hover:text-gray-400 transition-all duration-200"
            href="https://www.flaticon.com/br/"
            target="_blank"
            rel="noreferrer"
          >
            Flaticon.
          </a>
        </p>
        <p className="pt-8 md:self-end">
          © Copyright 2024. Feito por Felipe Martins.
        </p>
      </div>
    </div>
  )
}

export default Footer
