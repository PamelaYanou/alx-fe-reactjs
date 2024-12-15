
i// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async (username, location, minRepos, page) => {
  let query = `${username ? `in:login ${username}` : ''}`;
  
  if (location) {
    query += ` location:${location}`;
  }

  
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  
  const perPage = 10;
  const url = `${GITHUB_API_URL}?q=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data;  
  } catch (error) {
    throw error;
  }
};
