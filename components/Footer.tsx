const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">© 2023 Positive News. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Facebook
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

