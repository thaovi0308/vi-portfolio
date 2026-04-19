'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEMES_OPTIONS.map((theme) => (
        <button
          key={theme.id}
          className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${theme.label} theme`}
          data-id={theme.id}
        >
          {theme.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-6 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-sky-500">VT</span>
          <nav className="flex gap-4 text-xs text-zinc-500">
            <a href="#about" className="hover:text-sky-500">About</a>
            <a href="#services" className="hover:text-sky-500">Services</a>
            <a href="#projects" className="hover:text-sky-500">Projects</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400">© 2026 Vi Tran</span>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
