import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height:40,
  color: theme.palette.text.secondary,
}));

export default function Foundlist() {


  // axios.get('https://example.com/api/users')
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.error(error);
  // });

    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            [1, 2, 3, 4, 5, 6, 7, 8,9 ,10].map((i, index) =>(
                <Grid item xs={12} key={i}>
                <Item>A found Result</Item>
              </Grid>
            ))
        }
       
      
      </Grid>
    </Box>
  );
}
