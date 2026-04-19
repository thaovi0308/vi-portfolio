type Project = {
  name: string
  description: string
  link: string
  image: string
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
    name: 'Calendar Booking System — Originally US',
    description:
      'Interactive consultation booking system for a Singapore-based mobile app development company. Features date/time slot selection, public holiday filtering by timezone, multi-channel contact (Email, WhatsApp, Phone), responsive design, and smooth animations.',
    link: 'https://www.originallyus.sg/',
    image: '/projects/originally-us-booking.png',
    id: 'project1',
  },
  {
    name: 'Originally US — Agency Website',
    description:
      'Custom WordPress theme for a Singapore mobile app development agency. Features real-time analytics dashboard, AI chatbot, project showcase with modal popups, and responsive design optimized for all devices.',
    link: 'https://www.originallyus.sg/',
    image: '/projects/originally-us-website.png',
    id: 'project2',
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
