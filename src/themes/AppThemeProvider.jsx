import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectMode } from '@/features/user/userSlice';

const font = "'VT323', monospace";

function AppThemeProvider({ children }) {
  const mode = useSelector(selectMode);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        type: 'light',
        primary: {
          main: '#8e5dde',
          light: '#9075d8',
          dark: '#342260',
        },
        secondary: {
          main: '#e150e6',
        },
        background: {
          default: '#b893d0',
          paper: '#fbe2ff',
        },
        divider: 'rgba(144,117,216,0.27)',
      },

      text: {
        primary: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
        disabled: '#C3C1BD',
        secondary: '#999999',
      },

      typography: {
        fontFamily: font,
        body1: {
          fontFamily: font,
        }
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
