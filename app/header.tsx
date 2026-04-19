'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold text-sky-500"
      >
        VT
      </Link>
      <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <a href="#about" className="hover:text-sky-500 transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-sky-500 transition-colors">
          Services
        </a>
        <a href="#projects" className="hover:text-sky-500 transition-colors">
          Projects
        </a>
        <a
          href={`mailto:tranthaovi0308@gmail.com`}
          className="rounded-full bg-sky-500 px-4 py-1.5 text-white transition-colors hover:bg-sky-600"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}
