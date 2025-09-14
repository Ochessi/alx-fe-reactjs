import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite
  }));

  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Remove any undefined recipes

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId);
  };

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      borderRadius: '8px', 
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '15px',
        gap: '10px'
      }}>
        <h2 style={{ margin: 0, color: '#333' }}>❤️ My Favorites</h2>
        <span style={{ 
          backgroundColor: '#dc3545',
          color: 'white',
          borderRadius: '12px',
          padding: '2px 8px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {favoriteRecipes.length}
        </span>
      </div>

      {favoriteRecipes.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px', 
          color: '#666',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <p style={{ fontSize: '16px', margin: '0 0 10px 0' }}>💔 No favorites yet</p>
          <p style={{ fontSize: '14px', margin: 0 }}>
            Start adding recipes to your favorites by clicking the heart icon!
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {favoriteRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                border: '1px solid #e9ecef',
                borderRadius: '6px',
                padding: '15px',
                backgroundColor: '#fafafa',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#333',
                    fontSize: '18px'
                  }}>
                    {recipe.title}
                  </h3>
                  <p style={{ 
                    margin: '0 0 12px 0', 
                    color: '#666',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {recipe.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link 
                      to={`/recipe/${recipe.id}`}
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontSize: '13px',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRemoveFavorite(recipe.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#dc3545',
                    padding: '5px',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  title="Remove from favorites"
                >
                  💔
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
