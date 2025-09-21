import axios from 'axios';

// Get environment variables
const GITHUB_API_BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'GitHub-User-Search-App'
  }
});

// Add authorization header if API key is provided
if (GITHUB_API_KEY) {
  apiClient.defaults.headers.common['Authorization'] = `token ${GITHUB_API_KEY}`;
}

// GitHub API service for user search
export const githubService = {
  // Fetch user data from GitHub API - main function for user search
  fetchUserData: async (username) => {
    try {
      const response = await apiClient.get(`/users/${username}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      if (error.response?.status === 404) {
        return {
          success: false,
          error: 'User not found'
        };
      }
      if (error.response?.status === 403) {
        return {
          success: false,
          error: 'API rate limit exceeded. Please try again later or add a GitHub API key.'
        };
      }
      if (error.code === 'ECONNABORTED') {
        return {
          success: false,
          error: 'Request timeout. Please check your internet connection.'
        };
      }
      return {
        success: false,
        error: 'An error occurred while searching for the user'
      };
    }
  },

  // Get user's repositories (optional for future enhancement)
  getUserRepos: async (username, page = 1, perPage = 30) => {
    try {
      const response = await apiClient.get(`/users/${username}/repos`, {
        params: {
          page,
          per_page: perPage,
          sort: 'updated',
          direction: 'desc'
        }
      });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      if (error.response?.status === 403) {
        return {
          success: false,
          error: 'API rate limit exceeded. Please try again later or add a GitHub API key.'
        };
      }
      return {
        success: false,
        error: 'Failed to fetch repositories'
      };
    }
  },

  // Get API rate limit information
  getRateLimit: async () => {
    try {
      const response = await apiClient.get('/rate_limit');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch rate limit information'
      };
    }
  },

  // Advanced search for users using GitHub Search API
  searchUsers: async (searchParams) => {
    try {
      const { username, location, minRepos, page = 1, perPage = 30 } = searchParams;
      
      // Build query string for GitHub Search API
      let query = '';
      
      if (username) {
        query += username;
      }
      
      if (location) {
        query += ` location:${location}`;
      }
      
      if (minRepos) {
        query += ` repos:>=${minRepos}`;
      }
      
      // If no specific criteria, default to searching for users
      if (!query.trim()) {
        query = 'type:user';
      }

      // Advanced API integration using full GitHub Search API endpoint
      // https://api.github.com/search/users?q={query}&page={page}&per_page={perPage}
      const response = await apiClient.get('/search/users', {
        params: {
          q: query.trim(),
          page,
          per_page: perPage,
          sort: 'repositories',
          order: 'desc'
        }
      });

      return {
        success: true,
        data: {
          users: response.data.items,
          totalCount: response.data.total_count,
          hasNextPage: response.data.items.length === perPage,
          currentPage: page
        }
      };
    } catch (error) {
      if (error.response?.status === 403) {
        return {
          success: false,
          error: 'API rate limit exceeded. Please try again later or add a GitHub API key.'
        };
      }
      if (error.response?.status === 422) {
        return {
          success: false,
          error: 'Invalid search query. Please check your search criteria.'
        };
      }
      return {
        success: false,
        error: 'An error occurred while searching for users'
      };
    }
  },

  // Advanced search with explicit URL construction for complex queries
  searchUsersAdvanced: async (searchQuery, options = {}) => {
    try {
      const { page = 1, perPage = 30, sort = 'repositories', order = 'desc' } = options;
      
      // Construct full URL: https://api.github.com/search/users?q={searchQuery}
      const searchUrl = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=${perPage}&sort=${sort}&order=${order}`;
      
      const response = await axios.get(searchUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'GitHub-User-Search-App',
          ...(GITHUB_API_KEY && { 'Authorization': `token ${GITHUB_API_KEY}` })
        },
        timeout: 10000
      });

      return {
        success: true,
        data: {
          users: response.data.items,
          totalCount: response.data.total_count,
          hasNextPage: response.data.items.length === perPage,
          currentPage: page,
          searchUrl: searchUrl // Include the actual URL used for debugging
        }
      };
    } catch (error) {
      if (error.response?.status === 403) {
        return {
          success: false,
          error: 'API rate limit exceeded. Please try again later or add a GitHub API key.'
        };
      }
      if (error.response?.status === 422) {
        return {
          success: false,
          error: 'Invalid search query. Please check your search criteria.'
        };
      }
      return {
        success: false,
        error: 'An error occurred while searching for users'
      };
    }
  }
};

export default githubService;
