import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppThemeProvider from '@/themes/AppThemeProvider';
import lofi1 from '@/media/lofi1.gif';

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import transformertracks from '@/components/AudioPlayer/transformertracks';
import background from '@/media/lofi-bg.gif';
import MidiGenerator from '@/pages/Home/MidiGenerator.jsx';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'copyright © '}
      <Link color="inherit" href="https://launchpad.berkeley.edu/">
        lofi bytes from launchpad
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

//const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <AppBar position="relative">
      <Toolbar>
        <HeadphonesIcon/>
          <Box style={{ marginLeft: 16 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography variant="h6" color="inherit" noWrap>
          <Link href="/" underline="none" color="inherit">home</Link>
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography style={{ marginLeft: 16 }} variant="h6" color="inherit" noWrap>
          <Link href="/lofi-bytes-app/about" underline="none" color="inherit">about</Link>
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: 'url(' + background + ')',
            backgroundSize: 'cover',
            height: '100vh',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="text.primary" gutterBottom>
              Welcome to lofi bytes!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              generate your own lofi and game beats using musictransformer and tone.js
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <MidiGenerator />
            </Stack>
          </Container>
        </Box>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          &lt;3 &lt;3 &lt;3
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          hope you enjoy our site!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </AppThemeProvider>
  );
}
