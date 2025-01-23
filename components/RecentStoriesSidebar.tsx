'use client'

import { useState } from 'react'
import Link from 'next/link'

const articles = [
  { id: 1, title: "Local Community Plants 1000 Trees", date: "2023-05-15" },
  { id: 2, title: "Global Happiness Levels Increase", date: "2023-05-14" },
  { id: 3, title: "Renewable Energy Surpasses Fossil Fuels", date: "2023-05-13" },
]

const RecentStoriesSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`bg-secondary p-6 rounded-l-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className="text-2xl font-bold mb-4 text-primary">Recent Stories</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-muted pb-4">
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{article.date}</p>
              <Link href={`/article/${article.id}`} className="text-primary hover:underline text-sm">Read more →</Link>
            </article>
          ))}
        </div>
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-primary text-primary-foreground px-2 py-4 rounded-l-lg focus:outline-none ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => setIsOpen(true)}
      >
        Recent Stories
      </button>
    </div>
  )
}

export default RecentStoriesSidebar

