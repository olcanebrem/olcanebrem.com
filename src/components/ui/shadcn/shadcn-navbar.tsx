import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  className?: string
}

interface MenuItem {
  label: string
  href: string
  submenu?: MenuItem[]
}

const SubMenuItem = ({ item, isNested = false }: { item: MenuItem; isNested?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  return (
    <div
      className={cn(
        'relative group',
        isNested ? 'w-full' : ''
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.href}
        className={cn(
          'transition-colors hover:text-foreground/80 text-foreground/60',
          isNested ? 'block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700' : 'py-2'
        )}
      >
        <span className="flex items-center justify-between">
          {item.label}
          {item.submenu && (
            <svg
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                isOpen ? 'rotate-180' : '',
                isNested ? '-rotate-90' : ''
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </a>
      {item.submenu && isOpen && (
        <div
          className={cn(
            'absolute py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5',
            'animate-submenu-expand origin-top-left',
            isNested ? 'left-full top-0 ml-1' : 'top-full left-0 mt-1',
            isNested ? 'w-56' : 'w-48'
          )}
        >
          {item.submenu.map((subitem) => (
            <SubMenuItem key={subitem.label} item={subitem} isNested={true} />
          ))}
        </div>
      )}
    </div>
  )
}

export function ShadcnNavbar({ className }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const menuItems: MenuItem[] = [
    {
      label: 'UI Kits',
      href: '/ui',
      submenu: [
        { label: 'Ant Design', href: '/ui/ant' },
        { label: 'Shadcn UI', href: '/ui/shadcn' },
        { label: 'DaisyUI', href: '/ui/daisy' },
        { label: 'Material UI', href: '/ui/material' }
      ]
    },
    {
      label: 'Components',
      href: '/components',
      submenu: [
        {
          label: 'Layout',
          href: '/components/layout',
          submenu: [
            { label: 'Container', href: '/components/layout/container' },
            { label: 'Grid', href: '/components/layout/grid' },
            { label: 'Sidebar', href: '/components/layout/sidebar' }
          ]
        },
        {
          label: 'Forms',
          href: '/components/forms',
          submenu: [
            { label: 'Input', href: '/components/forms/input' },
            { label: 'Select', href: '/components/forms/select' },
            { label: 'Checkbox', href: '/components/forms/checkbox' },
            { label: 'Radio', href: '/components/forms/radio' }
          ]
        },
        {
          label: 'Feedback',
          href: '/components/feedback',
          submenu: [
            { label: 'Alert', href: '/components/feedback/alert' },
            { label: 'Toast', href: '/components/feedback/toast' },
            { label: 'Progress', href: '/components/feedback/progress' }
          ]
        }
      ]
    },
    {
      label: 'Themes',
      href: '/themes',
      submenu: [
        { label: 'Light', href: '/themes/light' },
        { label: 'Dark', href: '/themes/dark' },
        { label: 'Custom', href: '/themes/custom' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Examples', href: '/examples' },
        { label: 'GitHub', href: 'https://github.com/shadcn/ui' },
        { label: 'Community', href: '/community' }
      ]
    },
    {
      label: 'Settings',
      href: '/settings',
      submenu: [
        { label: 'Profile', href: '/settings/profile' },
        { label: 'Account', href: '/settings/account' },
        { label: 'Preferences', href: '/settings/preferences' },
        { label: 'Billing', href: '/settings/billing' }
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isVisible ? 'animate-nav-in' : 'animate-nav-out',
        className
      )}
    >
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          {/* Logo */}
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                shadcn/ui
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {menuItems.map((item) => (
                <SubMenuItem key={item.label} item={item} />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground/60 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden',
            isMobileMenuOpen ? 'animate-accordion-down' : 'animate-accordion-up',
            isMobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {menuItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground/60 hover:bg-accent hover:text-foreground/80"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <svg
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        activeSubmenu === item.label ? 'rotate-180' : ''
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="pl-4 space-y-1 animate-slide-down">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.label}>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === subitem.label ? null : subitem.label)}
                          className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 hover:bg-accent hover:text-foreground/80"
                        >
                          <span>{subitem.label}</span>
                          {subitem.submenu && (
                            <svg
                              className={cn(
                                'w-4 h-4 transition-transform duration-200',
                                activeSubmenu === subitem.label ? 'rotate-180' : ''
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </button>
                        {subitem.submenu && activeSubmenu === subitem.label && (
                          <div className="pl-4 space-y-1 animate-slide-down">
                            {subitem.submenu.map((nestedItem) => (
                              <a
                                key={nestedItem.label}
                                href={nestedItem.href}
                                className="block rounded-lg px-3 py-2 text-xs font-medium text-foreground/60 hover:bg-accent hover:text-foreground/80"
                              >
                                {nestedItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
