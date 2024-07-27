import { HeroContacs } from '../types'

const HeroSocialLinks = ({ url, logo, name }: HeroContacs) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={logo} alt={`${name} logo`} />
    </a>
  )
}

export default HeroSocialLinks
