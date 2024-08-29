import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Synth from '@/components/Synth/Synth.jsx';
import Typography from '@mui/material/Typography';
import { Client } from '@gradio/client';

const client = await Client.connect('Launchpad/lofi-bytes');

export default function MidiGenerator() {
  // FileUploader handles file type, so techinically, no error should be thrown.
  const [file, setFile] = React.useState(null);
  const [generating, setGenerating] = React.useState('');

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const loadFile = async (filePath) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fileContents = await response.arrayBuffer();
      return fileContents;
    } catch (error) {
      window.console.error('There was a problem loading the file:', error);
    }
  };

  const generateMIDI = async (midiFile) => {
    window.console.log(midiFile);

    let response = null;
    setGenerating('GENERATING... will take a minute!');
    // make a POST request to the Hugging Face Spaces API using the Gradio client
    try {
      response = await client.predict('/predict', {
        input_midi: midiFile,
      });
      window.console.log(response);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        window.console.log(error.response.data);
        window.console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        window.console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        window.console.log('Error', error.message);
      }
      setGenerating('Not a valid MIDI.');
    }
    if (response != null) {
      loadFile(response.data[0].url)
        .then((contents) => {
          window.console.log('File contents:', contents);
          setFile(contents);
          setGenerating('');
        })
        .catch((error) => {
          const data = JSON.parse(
            new TextDecoder().decode(error.response.data),
          );
          setGenerating(data.message);
        });
    }
  };

  const handlePreloadedMIDI = () => {
    generateMIDI('');
  };

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    generateMIDI(file);
  };

  return (
    <div>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Typography
          variant="body1"
          color="text.primary"
          style={{ fontSize: '20px' }}
        >
          <Button
            variant="contained"
            style={{ fontSize: '1.3rem' }}
            onClick={handleClick}
          >
            upload .mid file
          </Button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          style={{ fontSize: '20px' }}
        >
          <Button
            variant="contained"
            style={{ fontSize: '1.3rem' }}
            onClick={handlePreloadedMIDI}
          >
            use random .mid
          </Button>
        </Typography>
      </Stack>
      <Synth file={file} generating={generating} />
    </div>
  );
}
