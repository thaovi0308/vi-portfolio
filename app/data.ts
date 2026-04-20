type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Skill = {
  name: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Originally US — Homepage',
    description:
      'Custom WordPress theme for a Singapore mobile app development agency. Features real-time analytics dashboard, AI chatbot, project showcase with modal popups, and responsive design optimized for all devices.',
    link: 'https://www.originallyus.sg/',
    video: '/projects/homepage.mp4',
    id: 'project1',
  },
  {
    name: 'Originally US — Blog Page',
    description:
      'Blog section with clean typography, category filtering, and SEO-optimized layout. Built with WordPress custom theme for content marketing.',
    link: 'https://www.originallyus.sg/',
    video: '/projects/blogpage.mp4',
    id: 'project2',
  },
  {
    name: 'Originally US — Contact & Booking',
    description:
      'Interactive consultation booking system with date/time slot selection, public holiday filtering by timezone, multi-channel contact (Email, WhatsApp, Phone), and smooth animations.',
    link: 'https://www.originallyus.sg/',
    video: '/projects/contactpage.mp4',
    id: 'project3',
  },
  {
    name: 'Responsive Design Showcase',
    description:
      'Fully responsive implementation across desktop, tablet, and mobile. Pixel-perfect layouts with fluid typography and adaptive navigation.',
    link: 'https://www.originallyus.sg/',
    video: '/projects/responsive.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Originally US',
    title: 'Frontend Developer & WordPress Theme Developer',
    start: '2024',
    end: 'Present',
    link: 'https://www.originallyus.sg/',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Frontend Developer & QA Tester',
    start: '2023',
    end: 'Present',
    link: 'https://github.com/thaovi0308',
    id: 'work2',
  },
]

export const SKILLS: Skill[] = [
  { name: 'HTML', id: 'skill1' },
  { name: 'CSS', id: 'skill2' },
  { name: 'JavaScript', id: 'skill3' },
  { name: 'jQuery', id: 'skill4' },
  { name: 'WordPress', id: 'skill5' },
  { name: 'Responsive Design', id: 'skill6' },
  { name: 'Figma', id: 'skill7' },
  { name: 'Git', id: 'skill8' },
  { name: 'Landing Page', id: 'skill9' },
  { name: 'Front-End Development', id: 'skill10' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/thaovi0308',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thao-vi-tran-677b9b126/',
  },
]

export const EMAIL = 'tranthaovi0308@gmail.com'
