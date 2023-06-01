import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppThemeProvider from '@/themes/AppThemeProvider';
import teamPic from '@/media/lofi-bytes.png';
import background from '@/media/lofi-bg.gif';

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

const theme = createTheme();

export default function Album() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HeadphonesIcon />
          <Box
            style={{ marginLeft: 16 }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Typography variant="h6" color="inherit" noWrap>
              <Link href="/" underline="none" color="inherit">
                home
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
              style={{ marginLeft: 16 }}
              variant="h6"
              color="inherit"
              noWrap
            >
              <Link href="/about" underline="none" color="inherit">
                about
              </Link>
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
            // height: '100vh',
            pt: 8,
            pb: 6,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            sx={{  }}
            direction="row"
            justifyContent="center"
          >
            <Box
              maxWidth="md"
              bgcolor="rgba(255, 255, 255, 0.5)"
              sx={{ borderRadius: 3, p: 5, m: 5 }}
            >
              <Typography
                component="h4"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                about our project
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Always looking for your own, custom generated lofi beats? Well, we've been in your shoes.
                <br/>
                <br/>
                Our main goal was to create a web app where users can generate their own lofi and game beats to study/chill to.
                For this project, we scraped lofi data from YouTube, converted them into MIDI using a CNN-based model called basic-pitch by Spotify, and then
                trained the MusicTransformer model based on architecture from Google AI.
                <br/>
                Additionally, we built this website using React, synthesized our MIDI files using tone.js, and deployed our model API with Flask. 
                All in all, this was a unique learning experience for all of us, and we welcome you to check out our repo!

                <br/>
                <br/>
                If you want to learn more about our process and experiments with other models like LSTMs along the way, we highly recommend you to check out our Medium article! 
              </Typography>
            </Box>
            <Box
              maxWidth="md"
              bgcolor="rgba(255, 255, 255, 0.5)"
              sx={{ borderRadius: 3, p: 5, m: 5 }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                component="h4"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                about us
              </Typography>
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 450, md: 350 }, m:'auto'
                }}
                alt="Our team picture!"
                src={teamPic}
              />
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Hope you're enjoying our site :3 We're a group of students from
                UC Berkeley who love tinkering with machine learning
                applications. Lofi bytes is a semester long project that we
                worked on through Launchpad, an organization here on campus.
                <br />
                <br/>
                Project leader: Alicia Wang
                <br />
                Members: Alena Chao, Eric Liu, Zane Mogannam, Chloe Wong, Iris
                Zhou
                <br />
                Advisors: Vincent Lim, Winston Liu
              </Typography>
            </Box>
          </Stack>
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
