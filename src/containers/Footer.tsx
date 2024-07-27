const Footer = () => {
  return (
    <div className="bg-main-color" id="footer">
      <div className="flex flex-col container mx-auto px-10 lg:px-16 h-full text-[#949494] font-bold text-sm py-16 xl:py-32 xl:flex-row xl:justify-between">
        <p className="w-full xl:w-1/2">
          Projetado no Figma e codificado no Visual studio code. Desenvolvido
          com React e Typescript, deploy pela Vercel. Todos os textos utilizando
          Roboto e ícones pela flaticon.
        </p>
        <p className="pt-8 md:self-end">
          © Copyright 2024. Feito por Felipe Martins.
        </p>
      </div>
    </div>
  )
}

export default Footer
