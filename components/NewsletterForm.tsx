'use client'

import { useState } from 'react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server or newsletter service
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-serif mb-4 text-gray-900 dark:text-gray-100">Stay Positive</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Subscribe to our newsletter for uplifting news in your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default NewsletterForm

