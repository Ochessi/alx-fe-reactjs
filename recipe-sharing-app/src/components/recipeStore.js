import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) => set((state) => {
    const newRecipes = [...state.recipes, newRecipe];
    const store = get();
    return { 
      recipes: newRecipes,
      filteredRecipes: store.filterRecipesByTerm(newRecipes, state.searchTerm),
      recommendations: store.generateRecommendations(newRecipes, state.favorites)
    };
  }),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const newRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const store = get();
    return {
      recipes: newRecipes,
      filteredRecipes: store.filterRecipesByTerm(newRecipes, state.searchTerm),
      recommendations: store.generateRecommendations(newRecipes, state.favorites)
    };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const newRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const newFavorites = state.favorites.filter(favId => favId !== id);
    const store = get();
    return {
      recipes: newRecipes,
      favorites: newFavorites,
      filteredRecipes: store.filterRecipesByTerm(newRecipes, state.searchTerm),
      recommendations: store.generateRecommendations(newRecipes, newFavorites)
    };
  }),
  
  setRecipes: (recipes) => set((state) => {
    const store = get();
    return {
      recipes,
      filteredRecipes: store.filterRecipesByTerm(recipes, state.searchTerm),
      recommendations: store.generateRecommendations(recipes, state.favorites)
    };
  }),
  
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: get().filterRecipesByTerm(state.recipes, term)
  })),
  
  // Favorites management
  addFavorite: (recipeId) => set((state) => {
    if (state.favorites.includes(recipeId)) return state;
    const newFavorites = [...state.favorites, recipeId];
    const store = get();
    return { 
      favorites: newFavorites,
      recommendations: store.generateRecommendations(state.recipes, newFavorites)
    };
  }),
  
  removeFavorite: (recipeId) => set((state) => {
    const newFavorites = state.favorites.filter(id => id !== recipeId);
    const store = get();
    return {
      favorites: newFavorites,
      recommendations: store.generateRecommendations(state.recipes, newFavorites)
    };
  }),
  
  // Recommendation system
  generateRecommendations: (recipes, favorites) => {
    if (favorites.length === 0) {
      // If no favorites, recommend random popular recipes
      return recipes.slice(0, 3);
    }
    
    // Get favorite recipes to analyze patterns
    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
    
    // Simple recommendation: find recipes with similar keywords in title/description
    const keywords = favoriteRecipes.flatMap(recipe => 
      [...recipe.title.toLowerCase().split(' '), ...recipe.description.toLowerCase().split(' ')]
    ).filter(word => word.length > 3);
    
    const recommended = recipes
      .filter(recipe => !favorites.includes(recipe.id)) // Exclude already favorited
      .map(recipe => {
        const recipeText = `${recipe.title} ${recipe.description}`.toLowerCase();
        const score = keywords.reduce((acc, keyword) => 
          recipeText.includes(keyword) ? acc + 1 : acc, 0
        );
        return { recipe, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.recipe);
    
    return recommended;
  },
  
  filterRecipesByTerm: (recipes, term) => {
    if (!term.trim()) {
      return recipes;
    }
    const lowerTerm = term.toLowerCase();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerTerm) ||
      recipe.description.toLowerCase().includes(lowerTerm)
    );
  },
  
  // Initialize filtered recipes and recommendations
  initializeFilters: () => set((state) => {
    const store = get();
    return {
      filteredRecipes: state.recipes,
      recommendations: store.generateRecommendations(state.recipes, state.favorites)
    };
  })
}));

export default useRecipeStore;
