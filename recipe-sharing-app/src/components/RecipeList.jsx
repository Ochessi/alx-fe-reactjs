import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some recipes to get started!</p>
      ) : (
        recipes.map(recipe => (
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
