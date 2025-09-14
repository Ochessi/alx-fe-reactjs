import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, initializeFilters } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    initializeFilters: state.initializeFilters
  }));

  // Initialize filtered recipes on component mount
  useEffect(() => {
    initializeFilters();
  }, [initializeFilters]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>Recipe List</h2>
        {searchTerm && (
          <span style={{ 
            fontSize: '14px', 
            color: '#666',
            backgroundColor: '#e9ecef',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            {filteredRecipes.length} result{filteredRecipes.length !== 1 ? 's' : ''} for "{searchTerm}"
          </span>
        )}
      </div>
      
      {filteredRecipes.length === 0 ? (
        searchTerm ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>🔍 No recipes found</p>
            <p>No recipes match your search for "{searchTerm}"</p>
            <p style={{ fontSize: '14px' }}>Try searching for different keywords or check your spelling.</p>
          </div>
        ) : (
          <p>No recipes available. Add some recipes to get started!</p>
        )
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ddd', 
            margin: '10px 0', 
            padding: '20px', 
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{recipe.title}</h3>
            <p style={{ 
              margin: '0 0 15px 0', 
              color: '#666',
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {recipe.description}
            </p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              View Details →
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
