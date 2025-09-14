import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing Application</h1>
          <p>Share and discover amazing recipes!</p>
        </header>
        
        <Routes>
          <Route path="/" element={
            <main style={{ padding: '20px' }}>
              <SearchBar />
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <AddRecipeForm />
                </div>
                
                <div style={{ flex: '2', minWidth: '400px' }}>
                  <RecipeList />
                </div>
              </div>
            </main>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
