// src/services/api.js

import axios from 'axios';

// Set the base URL for Axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Generate a new asset
export const generateAsset = (description) => {
  return api.post('/assets/generate', { description });
};

// Get all assets
export const getAssets = () => {
  return api.get('/assets');
};

// Delete an asset by ID
export const deleteAsset = (id) => {
  return api.delete(`/assets/${id}`);
};
