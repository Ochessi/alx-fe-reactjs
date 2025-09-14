import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px', marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <AddRecipeForm />
                  <FavoritesList />
                </div>
                
                <div>
                  <RecipeList />
                </div>
                
                <div>
                  <RecommendationsList />
                </div>
              </div>
              
              {/* Mobile responsive layout */}
              <style jsx>{`
                @media (max-width: 1200px) {
                  .grid-container {
                    grid-template-columns: 1fr 1fr !important;
                  }
                  .recommendations-column {
                    grid-column: 1 / -1;
                  }
                }
                @media (max-width: 768px) {
                  .grid-container {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
            </main>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
