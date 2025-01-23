'use client'

import { useState, useRef, useEffect } from 'react'

interface ArticleProps {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  isLatest: boolean
}

export default function ArticleCard({ id, title, excerpt, content, date, readTime, isLatest }: ArticleProps) {
  const [isExpanded, setIsExpanded] = useState(isLatest)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (isExpanded && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <article className={`mb-8 ${isExpanded ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-700'} transition-all duration-300 ease-in-out rounded-lg overflow-hidden`}>
      <div 
        className={`cursor-pointer p-6 ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}`} 
        onClick={toggleExpand}
      >
        <h2 ref={titleRef} className="text-2xl font-serif mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{date}</span>
          <span className="mx-2">·</span>
          <span>{readTime}</span>
        </div>
        {isExpanded ? (
          <div className="mt-4">
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">{content}</p>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
        )}
      </div>
    </article>
  )
}

