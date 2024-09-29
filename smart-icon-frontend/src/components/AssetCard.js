// src/components/AssetCard.js

import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const AssetCard = ({ asset, onDelete }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={asset.imageUrl}
        alt={asset.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {asset.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created at: {new Date(asset.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={() => onDelete(asset._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AssetCard;
