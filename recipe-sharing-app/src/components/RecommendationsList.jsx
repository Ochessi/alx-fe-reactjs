import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, addFavorite, favorites } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    addFavorite: state.addFavorite,
    favorites: state.favorites
  }));

  const handleAddToFavorites = (recipeId) => {
    addFavorite(recipeId);
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
        <h2 style={{ margin: 0, color: '#333' }}>✨ Recommended for You</h2>
        <span style={{ 
          backgroundColor: '#28a745',
          color: 'white',
          borderRadius: '12px',
          padding: '2px 8px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {recommendations.length}
        </span>
      </div>

      {recommendations.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px', 
          color: '#666',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <p style={{ fontSize: '16px', margin: '0 0 10px 0' }}>🤖 No recommendations yet</p>
          <p style={{ fontSize: '14px', margin: 0 }}>
            Add some recipes to your favorites to get personalized recommendations!
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {recommendations.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                border: '1px solid #e9ecef',
                borderRadius: '6px',
                padding: '15px',
                backgroundColor: '#f8fff8',
                transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative'
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
              <div style={{ 
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '12px',
                padding: '2px 6px',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>
                RECOMMENDED
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, paddingRight: '60px' }}>
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
                  
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                    
                    {!favorites.includes(recipe.id) && (
                      <button
                        onClick={() => handleAddToFavorites(recipe.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#28a745',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#1e7e34'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                      >
                        ❤️ Add to Favorites
                      </button>
                    )}
                    
                    {favorites.includes(recipe.id) && (
                      <span style={{
                        padding: '6px 12px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        borderRadius: '4px',
                        fontSize: '13px'
                      }}>
                        ❤️ Already Favorited
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {recommendations.length > 0 && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px',
          backgroundColor: '#e8f5e8',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#155724'
        }}>
          💡 These recommendations are based on your favorite recipes and similar content patterns.
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
