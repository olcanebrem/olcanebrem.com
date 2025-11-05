'use client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { type ReactNode } from 'react'

interface MantineClientProviderProps {
  children: ReactNode
}

const theme = {
  primaryColor: 'violet',
  fontFamily: 'var(--font-inter)',
  headings: {
    fontFamily: 'var(--font-inter)',
  },
}

export default function MantineClientProvider({ children }: MantineClientProviderProps) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}
