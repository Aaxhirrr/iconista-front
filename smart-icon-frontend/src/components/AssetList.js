// src/components/AssetList.js

import React from 'react';
import { Grid, Typography } from '@mui/material';
import AssetCard from './AssetCard';

const AssetList = ({ assets, onDelete }) => {
  if (assets.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        No assets generated yet. Start by creating one!
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {assets.map((asset) => (
        <Grid item xs={12} sm={6} md={4} key={asset._id}>
          <AssetCard asset={asset} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AssetList;
