'use client';

import React, { useMemo } from 'react'; // Import useMemo
import { Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import { MaterialButtons } from './MaterialButtons'; // Assuming these exist
import { MaterialCards } from './MaterialCards';   // Assuming these exist
import { MaterialProgress } from './MaterialProgress'; // Assuming these exist

export function MaterialDemo() {
  // Move createTheme INSIDE the component and wrap with useMemo
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#6750A4',
        },
        secondary: {
          main: '#625B71',
        },
        background: {
          default: '#FFFBFE',
          paper: '#FFFBFE',
        },
        text: {
          primary: '#1C1B1F',
          secondary: '#49454F',
        },
      },
      typography: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      },
      shape: {
        borderRadius: 16,
      },
    });
  }, []); // Empty dependency array: theme is created once per component instance

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack spacing={4}>
          <MaterialButtons />
          <MaterialCards />
          <MaterialProgress />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}