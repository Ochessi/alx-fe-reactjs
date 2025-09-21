import Search from './components/Search'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">GitHub User Search</h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            Discover GitHub users with advanced search capabilities
          </p>
        </div>
      </header>

      <main className="py-8">
        <Search />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-gray-500">
            Built with React, Tailwind CSS & GitHub API
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
