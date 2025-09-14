import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
        <p>Share and discover amazing recipes!</p>
      </header>
      
      <main style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <AddRecipeForm />
        </div>
        
        <div style={{ flex: '2', minWidth: '400px' }}>
          <RecipeList />
        </div>
      </main>
    </div>
  )
}

export default App
