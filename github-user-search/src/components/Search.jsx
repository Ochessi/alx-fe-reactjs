import { useState } from 'react';
import { githubService } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if at least one search criteria is provided
    if (!searchParams.username.trim() && !searchParams.location.trim() && !searchParams.minRepos.trim()) {
      setError('Please enter at least one search criteria');
      return;
    }
    
    setLoading(true);
    setError('');
    setSearchResults(null);
    setCurrentPage(1);
    
    const result = await githubService.searchUsers({
      username: searchParams.username.trim(),
      location: searchParams.location.trim(),
      minRepos: searchParams.minRepos.trim(),
      page: 1,
      perPage: 30
    });
    
    if (result.success) {
      setSearchResults(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleLoadMore = async () => {
    if (!searchResults || loading) return;
    
    setLoading(true);
    const nextPage = currentPage + 1;
    
    const result = await githubService.searchUsers({
      username: searchParams.username.trim(),
      location: searchParams.location.trim(),
      minRepos: searchParams.minRepos.trim(),
      page: nextPage,
      perPage: 30
    });
    
    if (result.success) {
      setSearchResults(prev => ({
        ...result.data,
        users: [...prev.users, ...result.data.users]
      }));
      setCurrentPage(nextPage);
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Advanced Search Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Advanced GitHub User Search</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={searchParams.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                placeholder="e.g., octocat"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={searchParams.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g., San Francisco"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            {/* Minimum Repositories Field */}
            <div>
              <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Repositories
              </label>
              <input
                type="number"
                id="minRepos"
                value={searchParams.minRepos}
                onChange={(e) => handleInputChange('minRepos', e.target.value)}
                placeholder="e.g., 10"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                'Search Users'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchResults && searchResults.users.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Search Results ({searchResults.totalCount.toLocaleString()} users found)
            </h3>
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.users.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.avatar_url} 
                    alt={`${user.login}'s avatar`}
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium text-gray-900 truncate">
                      {user.name || user.login}
                    </h4>
                    <p className="text-sm text-gray-500">@{user.login}</p>
                    {user.location && (
                      <p className="text-sm text-gray-600 mt-1">📍 {user.location}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                  <span>{user.public_repos} repositories</span>
                  <span>{user.followers} followers</span>
                </div>
                
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {searchResults.hasNextPage && (
            <div className="mt-8 text-center">
              <button 
                onClick={handleLoadMore}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More Users'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results Message */}
      {searchResults && searchResults.users.length === 0 && !loading && (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Looks like we cant find the user</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Search;
