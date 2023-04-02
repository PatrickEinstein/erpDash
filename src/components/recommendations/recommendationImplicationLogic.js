import React from 'react';
import { Box, Typography } from "@mui/material";

export const RecommendationsImplication = ({ cat , r1, r2, r3, r4, r5}) => {
    switch (true) {
      case cat < 1:
        return <Typography>{r1}</Typography>;
        break;
      case cat < 2:
        return <Typography>{r2}</Typography>;
        break;
      case cat < 3:
        return <Typography>{r3}</Typography>;
        break;
      case cat < 4:
        return <Typography>{r4}</Typography>;
        break;
      case cat = 5:
        return <Typography>{r5}</Typography>;
        break;
      default:
        return <Typography>No score</Typography>;
    }
  };