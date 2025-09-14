import { useState } from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleteSuccess }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onDeleteSuccess();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ color: '#dc3545', fontWeight: 'bold' }}>Are you sure?</span>
        <button
          onClick={handleDelete}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Yes, Delete
        </button>
        <button
          onClick={handleCancel}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      style={{
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
