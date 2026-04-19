'use client'
import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { TextEffect } from '@/components/ui/text-effect'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const SERVICES = [
  {
    icon: '🌐',
    title: 'Custom Web Design',
    description:
      'Crafting visually stunning, user-friendly websites that align with your brand and engage your audience.',
  },
  {
    icon: '💻',
    title: 'Front-End Development',
    description:
      'Building fast, scalable, and high-performance websites with clean code, efficient structure, and seamless functionality.',
  },
  {
    icon: '📝',
    title: 'WordPress Development',
    description:
      'Custom WordPress solutions, including theme and plugin development, ensuring speed, security, and easy management.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Creating pixel-perfect responsive designs that look great on all devices, from desktop to mobile.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Vi delivered an outstanding booking system for our website. Professional, responsive, and great attention to detail.',
    name: 'Originally US',
    role: 'Singapore App Agency',
  },
  {
    text: 'Great communication and high-quality WordPress development. The website exceeded our expectations.',
    name: 'Client',
    role: 'Web Development Project',
  },
]

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-600 hover:text-white dark:bg-sky-900/30 dark:text-sky-400 dark:hover:bg-sky-600 dark:hover:text-white"
      >
        {children}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="text-center pt-8"
      >
        <span className="mb-4 inline-block rounded-full bg-sky-50 px-4 py-1.5 text-sm text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
          Welcome, I&apos;m Vi Tran
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Freelance Frontend Developer
          <br />
          And WordPress Specialist
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-zinc-500 dark:text-zinc-400">
          Designing and developing high-performance, visually captivating
          websites that drive results. Specializing in WordPress themes,
          responsive design, and seamless user experiences.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-600"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/thaovi0308"
            target="_blank"
            className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            View GitHub
          </a>
        </div>
      </motion.section>

      {/* ABOUT ME */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <img
              src="/avatar.jpg"
              alt="Vi Tran"
              className="h-48 w-48 rounded-2xl object-cover shadow-lg ring-4 ring-sky-100 dark:ring-sky-900/30"
            />
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-3 py-1 shadow-md dark:bg-zinc-800">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-600 hover:text-sky-700 dark:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-sm text-sky-500">About Me</span>
            <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Transforming Ideas Into Stunning Websites With Design &amp;
              WordPress Expertise
            </h2>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400">
              I&apos;m a frontend developer specializing in WordPress themes and
              responsive web design. I create visually stunning, user-friendly
              websites that help businesses grow and stand out in the digital
              world.
            </p>
            <div className="mt-5 flex justify-center gap-6 sm:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-500">2+</p>
                <p className="text-xs text-zinc-500">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-500">5+</p>
                <p className="text-xs text-zinc-500">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sky-500">100%</p>
                <p className="text-xs text-zinc-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-center">
          <span className="text-sm text-sky-500">Services</span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            My Services
          </h2>
          <p className="mx-auto mt-2 max-w-md text-zinc-500 dark:text-zinc-400">
            Bringing your vision to life with expert web design, development,
            and WordPress solutions.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-center">
          <span className="text-sm text-sky-500">Expertise</span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill.id}
              className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-900/20 dark:text-sky-300"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </motion.section>

      {/* RECENT WORK */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-center">
          <span className="text-sm text-sky-500">Portfolio</span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            My Recent Work
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {project.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-500">
                  View Case Study →
                </span>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* WORK EXPERIENCE */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-center">
          <span className="text-sm text-sky-500">Career</span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
        </div>
        <div className="mt-6 flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <a
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-zinc-100 bg-white p-4 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {job.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-sm text-zinc-400">
                {job.start} - {job.end}
              </p>
            </a>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-center">
          <span className="text-sm text-sky-500">Testimonials</span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            What My Clients Say
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm italic text-zinc-600 dark:text-zinc-400">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 font-bold dark:bg-sky-900/30 dark:text-sky-400">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {t.name}
                  </p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-sky-50 to-white p-8 dark:border-zinc-800 dark:from-sky-950/20 dark:to-zinc-900">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Have a project in mind?
            </h2>
            <p className="mt-1 text-zinc-500 dark:text-zinc-400">
              Just say Hi! I&apos;d love to hear about your project.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sky-500">✉</span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-zinc-700 hover:text-sky-500 dark:text-zinc-300"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-500">🔗</span>
              <a
                href="https://www.linkedin.com/in/thao-vi-tran-677b9b126/"
                target="_blank"
                className="text-zinc-700 hover:text-sky-500 dark:text-zinc-300"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-500">💻</span>
              <a
                href="https://github.com/thaovi0308"
                target="_blank"
                className="text-zinc-700 hover:text-sky-500 dark:text-zinc-300"
              >
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label[0]}
              </MagneticSocialLink>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
