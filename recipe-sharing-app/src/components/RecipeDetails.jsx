import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const { recipe, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    recipe: state.recipes.find(recipe => recipe.id === parseInt(id)),
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteSuccess = () => {
    navigate('/');
  };

  const handleToggleFavorite = () => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ 
          marginBottom: '20px',
          padding: '8px 16px', 
          backgroundColor: '#6c757d', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        ← Back to Recipes
      </button>

      {isEditing ? (
        <EditRecipeForm 
          recipe={recipe} 
          onCancel={handleEditToggle}
          onSave={handleEditToggle}
        />
      ) : (
        <div>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '30px', 
            borderRadius: '10px', 
            marginBottom: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h1 style={{ margin: '0 0 15px 0', color: '#333' }}>{recipe.title}</h1>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: '#666',
              margin: 0
            }}>
              {recipe.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={handleToggleFavorite}
              style={{
                padding: '10px 20px',
                backgroundColor: favorites.includes(recipe.id) ? '#dc3545' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {favorites.includes(recipe.id) ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
            </button>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleEditToggle}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Edit Recipe
              </button>
              
              <DeleteRecipeButton 
                recipeId={recipe.id} 
                onDeleteSuccess={handleDeleteSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
