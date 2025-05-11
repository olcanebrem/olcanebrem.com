import React from 'react'
import { Button } from './button'

interface ShadcnLayoutProps {
  title: string
  description: string
}

export function ShadcnLayout({ title, description }: ShadcnLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Example Components */}
        <div className="grid gap-8">
          {/* Buttons Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          {/* Button Sizes */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <span className="material-symbols-outlined">add</span>
              </Button>
            </div>
          </section>

          {/* States */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">States</h2>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button className="cursor-not-allowed opacity-50">Loading...</Button>
              <Button variant="outline" className="border-dashed">Dashed</Button>
            </div>
          </section>
        </div>

        {/* Documentation Link */}
        <div className="pt-8">
          <Button variant="outline" asChild>
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <span>Documentation</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
