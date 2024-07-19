import React from 'react'

type WelcomeProps = {
  uses: [
    'Conhecer novas pessoas',
    'Contar um pouco da minha tragetória',
    'Mostrar minhas habilidades e o que eu sei fazer',
    'Achar oportunidades de um emprego'
  ]
}

export const Welcome = ({ uses }: WelcomeProps) => {
  return (
    <>
      <h1>Bem-vindo ao meu espacinho na internet</h1>
      <ul>
        <p>Com esse site eu quero:</p>
        {uses.map((use, i) => (
          <li key={i}>{use}</li>
        ))}
      </ul>
    </>
  )
}

export default Welcome
