// src/App.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Snackbar, Alert } from '@mui/material';
import GenerateForm from './components/GenerateForm';
import AssetList from './components/AssetList';
import { getAssets } from './services/api';

function App() {
  const [assets, setAssets] = useState([]);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const fetchAssets = async () => {
    try {
      const response = await getAssets();
      setAssets(response.data);
    } catch (err) {
      console.error(err);
      setNotification({ open: true, message: 'Error fetching assets', severity: 'error' });
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const handleGenerate = (newAsset) => {
    setAssets([newAsset, ...assets]);
    setNotification({ open: true, message: 'Asset generated successfully!', severity: 'success' });
  };

  const handleDelete = (id) => {
    setAssets(assets.filter((asset) => asset._id !== id));
    setNotification({ open: true, message: 'Asset deleted successfully!', severity: 'info' });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Smart Icon & Sticker Generator
      </Typography>
      <GenerateForm onGenerate={handleGenerate} />
      <AssetList assets={assets} onDelete={handleDelete} />
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
