import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100">
          Positive News
        </Link>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">About</Link></li>
              <li><Link href="/archive" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Archive</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

