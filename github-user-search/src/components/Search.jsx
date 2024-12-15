// src/components/Search.jsx
import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService"; // Import API function

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // Handle pagination

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "location") setLocation(value);
    if (name === "minRepos") setMinRepos(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]); // Clear previous search results

    try {
      const data = await fetchAdvancedUserData(
        username,
        location,
        minRepos,
        page
      );
      if (data.items) {
        setUsers(data.items);
      }
    } catch (err) {
      setError("Looks like we can’t find any users matching your criteria");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(page + 1); // Increment page number to load next set of results
    handleSearch(new Event("submit")); // Re-run search with updated page number
  };

  return (
    <div className="search-container p-4">
      <h2 className="text-2xl font-bold mb-4">Search for GitHub Users</h2>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="input input-bordered w-full mb-2"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Location (optional)"
          className="input input-bordered w-full mb-2"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum repositories"
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn btn-primary w-full">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && !loading && (
        <div className="user-results">
          {users.map((user) => (
            <div key={user.id} className="user-card p-4 mb-4 border rounded-lg">
              <h3 className="font-semibold">{user.login}</h3>
              <p>{user.location || "No location available"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Visit Profile
              </a>
            </div>
          ))}
          <button onClick={loadMore} className="btn btn-secondary w-full">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
