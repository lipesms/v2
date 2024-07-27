type SkillsType = {
  name: string
  percent: string
}

type ExperiencesType = {
  name: string
  local: string
  company: string
  date: {
    start: string
    end: string
  }
}

type Project = {
  name: string
  description: string
  image: string
  url: string
  technologies: string[]
}

type Contact = {
  name: string
  logo: string
  url: string
}

export type PortfolioProps = {
  apresentation: {
    headline: string
    text: string
  }
  aboutMe: {
    text: string
    overlay: {
      years: number
      experienceYears: string
      projects: string
    }
  }
  skills: {
    frontend: SkillsType[]
    backend: SkillsType[]
    design: SkillsType[]
  }
  experiences: {
    academics: ExperiencesType[]
    professionals: ExperiencesType[]
  }
  projects: Project[]
  contacts: Contact[]
}
