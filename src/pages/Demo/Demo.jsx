import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import AppThemeProvider from '@/themes/AppThemeProvider';

function Demo() {
  return (
    <AppThemeProvider>
      <Container sx={{ py: 2, position: 'relative' }}>
        <Stack gap={1} my={2}>
          
            
          <Typography textAlign="center" variant="h2">
            Viterjs-template
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            React + Redux + MuI + Axios + ESlint + Prettier
          </Typography>
          <Counter />
        </Stack>
        <TemplateTester />
      </Container>
    </AppThemeProvider>
  );
}

export default Demo;
