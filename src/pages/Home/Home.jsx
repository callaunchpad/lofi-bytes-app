import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import lstmtracks from "@/components/AudioPlayer/lstmtracks";
import transformertracks from "@/components/AudioPlayer/transformertracks";
import background from "@/media/lofi-bg.gif";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://launchpad.berkeley.edu/">
        lofi bytes from launchpad
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            lofi bytes
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
            height: "100vh",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
        
          {/*<Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            welcome to lofi bytes
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            generate your own lofi and game beats!
        </Typography> */}
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              
              {/* <AudioPlayer tracks={lstmtracks} /> */}
              <AudioPlayer tracks={transformertracks} />
              {/* <tone-content>
              <tone-play-toggle>

              <div id="container">
                <button aria-label="Play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                </button>
              </div>
              </tone-play-toggle>
                <div id="FileDrop">
                  <div id="Text">
                    Drop a midi file here
                  </div>
                  <input type="file" accept="audio/midi" />
                </div>
                <div id="Results">
                  <textarea
                    id="ResultsText"
                    placeholder="json output..."
                  ></textarea>
                </div>
                <tone-play-toggle disabled></tone-play-toggle>
              </tone-content> */}
              
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        {/*<Container sx={{ py: 8 }} maxWidth="md">
          
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia component="img" image={lofi1} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container> */}
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
          Hope you enjoy our site!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </AppThemeProvider>
  );
}
