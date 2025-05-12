'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/shadcn/button'
import { Input } from '@/components/ui/shadcn/input'

const defaultKeywords = [
  'React', 'TypeScript', 'Next.js', 'Astro', 
  'UI/UX', 'Frontend', 'Backend', '3D Design',
  'Animation', 'Web Development', 'Mobile Apps'
]

import '@/styles/keyword-filter.css'

export default function KeywordFilter() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredKeywords = defaultKeywords.filter(keyword =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    )
  }

  return (
    <div className="keyword-filter-container">
      <div className="keyword-filter-search">
        <h2 className="keyword-filter-header">İlgi Alanlarını Keşfet</h2>
        <Input
          type="text"
          placeholder="Anahtar kelime ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="keyword-filter-grid">
        {filteredKeywords.map((keyword) => (
          <Button
            key={keyword}
            variant={selectedKeywords.includes(keyword) ? "default" : "outline"}
            onClick={() => toggleKeyword(keyword)}
            className={`keyword-button ${
              selectedKeywords.includes(keyword)
                ? 'keyword-button-default'
                : 'keyword-button-outline'
            }`}
          >
            {keyword}
            {selectedKeywords.includes(keyword) && (
              <span className="keyword-badge">✓</span>
            )}
          </Button>
        ))}
      </div>

      {selectedKeywords.length > 0 && (
        <div className="keyword-counter">
          <p>
            Seçilen: {selectedKeywords.length} anahtar kelime
          </p>
          <button
            onClick={() => setSelectedKeywords([])}
            className="clear-button"
          >
            Seçimleri Temizle
          </button>
        </div>
      )}
    </div>
  )
}
