// src/components/GenerateForm.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { generateAsset } from '../services/api';

const GenerateForm = ({ onGenerate }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError('Description cannot be empty');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await generateAsset(description);
      onGenerate(response.data);
      setDescription('');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Error generating asset');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Generate a Custom Icon/Sticker
      </Typography>
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={loading}
      />
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Generate'}
      </Button>
    </Box>
  );
};

export default GenerateForm;
