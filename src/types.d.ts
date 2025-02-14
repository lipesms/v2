export type SkillsType = {
  name: string
  percent: number
}

export type ExperiencesType = {
  name: string
  local: string
  company: string
  date: {
    start: string
    end: string
  }
}

export type HeroContacs = {
  name: string
  url: string
  logo: string
}

export type Apresentation = {
  headline: string
  text: string[]
  contacts: HeroContacs[]
}

export type AboutMe = {
  text: string[]
  curriculum: string
  overlay: {
    years: number
    experienceYears: string
    projects: string
  }
}

export type Skills = {
  frontend: SkillsType[]
  backend: SkillsType[]
  design: SkillsType[]
}

export type Experiences = {
  academics: ExperiencesType[]
  professionals: ExperiencesType[]
}

export type Project = {
  name: string
  description: string
  image: string
  url: string
  technologies: string[]
}

export type Contact = {
  name: string
  logo: string
  url: string
}

export type PortfolioProps = {
  apresentation: Apresentation
  aboutMe: AboutMe
  skills: Skills
  experiences: Experiences
  projects: Project[]
  contacts: Contact[]
}
