interface Profile {
  fullName: string
  title: string
  institute: string
  author_name: string
  research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
  fullName: 'Runzhe Zhang',
  title: 'Electrical and Computer Engineering undergraduate, 2024 cohort',
  institute: 'SJTU Global College (formerly UM-SJTU Joint Institute)',
  author_name: 'Runzhe Zhang',
  research_areas: [
    { title: 'Agents', description: 'Exploring multi-agent systems and related areas.', field: 'computer-science' },
    { title: 'Generative Models', description: 'Diffusion language models, flow matching, and molecular generation.', field: 'computer-science' },
  ],
}

// The only public contact detail is the email address.
export const social = {
  email: 'abc-degf@sjtu.edu.cn',
}

export const template = {
  website_url: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  menu_left: false,
  transitions: true,
  lightTheme: 'corporate',
  darkTheme: 'business',
  excerptLength: 200,
  postPerPage: 5,
  base: import.meta.env.PUBLIC_SITE_BASE || '',
}

export const seo = {
  default_title: 'Runzhe Zhang | Academic Homepage',
  default_description: 'Research by Runzhe Zhang in agents and generative models.',
  default_image: `${import.meta.env.PUBLIC_SITE_BASE || ''}/favicon.svg`,
}
