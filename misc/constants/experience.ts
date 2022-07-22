export type ExperienceType = {
  title: string
  link?: string
  when: string
  where: string
  desc: string[]
  techStack?: string[]
  imgUrl?: string
  isEven?: boolean
}

export const EXPERIENCE = [
  {
    title: 'Human Resources of Software Engineering',
    link: 'https://www.compfest.id/',
    when: 'February 2022 - Present',
    where: 'Compfest',
    desc: [
      "Take part in Compfest's website development team as a Software Engineer.",
      'Responsible for the backend development of Compfest Company Profile, which includes creating database with Prisma and connecting it with the frontend.',
      'Interviewed and recruited staffs of Software Engineering Compfest.',
    ],
    techStack: ['Blitz.js', ' TailwindCSS', 'Prisma'],
    imgUrl: '/images/compfest1.png',
  },
  {
    title: 'Staff of Web Development',
    link: 'https://perak.cs.ui.ac.id/',
    when: 'January 2022 - March 2022',
    where: 'Pesta Rakyat Komputer',
    desc: [
      'In charge of the frontend development for Pesta Rakyat Komputer’s arcade and gallery feature.',
      'Utilize strapi to create database and fetch data.',
    ],
    techStack: ['Next.js', ' TailwindCSS', 'Strapi'],
    imgUrl: '/images/perak1.png',
  },
  {
    title: 'Staff of Web Development',
    link: 'https://betis.cs.ui.ac.id/',
    when: 'November 2021 - January 2022',
    where: 'BETIS Fasilkom UI',
    desc: [
      'Created the frontend part of some feature for the website, for instance the schedule feature.',
      'Fetched data from strapi and display it using getServerSideProps.',
    ],
    techStack: ['Next.js', ' TailwindCSS', 'Strapi'],
    imgUrl: '/images/betis1.png',
  },
  {
    title: 'Staff of Public Relation',
    when: 'August 2021 - December 2021',
    where: 'Open House Fasilkom UI',
    desc: [
      'Hosted one of Open House Fasilkom UI Events as the Master of Ceremony.',
      'Reached out to 10 high schools in Indonesia to spread information regarding Fasilkom UI as tertiary education.',
    ],
    imgUrl: '/images/ohfasil.png',
  },
  {
    title: 'Member of Web Development Team',
    link: 'https://www.shapeyourlifeid.com/',
    when: 'August 2021 - September 2021',
    where: 'Shape Your Life ID',
    desc: [
      'Designed a WIX website for Shape Your Life ID in vision to reach out to more people regarding pursuing education abroad.',
      'Worked closely with its founder to visualize the proper website with its corresponding feature.',
    ],
    imgUrl: '/images/syl.jpg',
  },
]
