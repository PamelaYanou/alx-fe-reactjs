// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import API function

const Search = () => {
  const [username, setUsername] = useState(''); // Capture input value
  const [user, setUser] = useState(null); // Store the fetched user data
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(''); // Handle error state

  const handleInputChange = (e) => {
    setUsername(e.target.value); // Update username as user types
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null); // Clear previous search result

    try {
      // Fetch user data from GitHub API
      const data = await fetchUserData(username);
      if (data) {
        setUser(data); // Set user data if API call is successful
      }
    } catch (err) {
      setError("Looks like we can't find the user"); // Display error message
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="search-container">
      <h2>Search for GitHub Users</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}  {/* Show loading text */}
      {error && <p>{error}</p>}        {/* Show error message */}
      
      {user && !loading && (          {/* Display user info if available */}
        <div>
          <h3>{user.login || 'No Login Available'}</h3> {/* Display GitHub username */}
          <p>{user.bio || 'No Bio Available'}</p> {/* Default text for bio */}
          <img src={user.avatar_url} alt={user.login} width="100" />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
