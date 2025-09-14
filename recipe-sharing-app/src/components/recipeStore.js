import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (newRecipe) => set((state) => {
    const newRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: newRecipes,
      filteredRecipes: get().filterRecipesByTerm(newRecipes, state.searchTerm)
    };
  }),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const newRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: newRecipes,
      filteredRecipes: get().filterRecipesByTerm(newRecipes, state.searchTerm)
    };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const newRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: newRecipes,
      filteredRecipes: get().filterRecipesByTerm(newRecipes, state.searchTerm)
    };
  }),
  
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: get().filterRecipesByTerm(recipes, state.searchTerm)
  })),
  
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: get().filterRecipesByTerm(state.recipes, term)
  })),
  
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
  
  // Initialize filtered recipes
  initializeFilters: () => set((state) => ({
    filteredRecipes: state.recipes
  }))
}));

export default useRecipeStore;
