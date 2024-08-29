import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Synth from '@/components/Synth/Synth.jsx';
import Typography from '@mui/material/Typography';
import { Client } from '@gradio/client';

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

  const generateMIDI = async (midiFile, useRandom = false) => {
    let inputMidi;

    if (useRandom) {
      setGenerating('GENERATING... will take a minute!');
      try {
        const response = await fetch(
          'https://huggingface.co/spaces/Launchpad/lofi-bytes/resolve/main/uploaded_midis/ghibli_castle_in_the_sky.mid',
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        inputMidi = new File([blob], 'ghibli_castle_in_the_sky.mid', {
          type: 'audio/midi',
        });
        window.console.log(inputMidi);
      } catch (error) {
        window.console.error('Error fetching random MIDI:', error);
        setGenerating('Failed to fetch random MIDI.');
        return;
      }
    } else {
      inputMidi = midiFile;
    }

    setGenerating('GENERATING... will take a minute!');
    // make a POST request to the Hugging Face Spaces API using the Gradio client
    try {
      const client = await Client.connect('Launchpad/lofi-bytes');
      const response = await client.predict('/predict', {
        input_midi: inputMidi,
      });
      window.console.log(response);

      const generatedMidiContent = await loadFile(response.data[0].url);
      setFile(generatedMidiContent);
      setGenerating('');
    } catch (error) {
      if (error.response) {
        window.console.log(error.response.data);
        window.console.log(error.response.status);
      } else if (error.request) {
        window.console.log(error.request);
      } else {
        window.console.log('Error', error.message);
      }
      setGenerating('Error in MIDI generation.');
    }
  };

  const handlePreloadedMIDI = () => {
    generateMIDI(null, true); // Use random MIDI
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    generateMIDI(uploadedFile, false); // Use uploaded MIDI
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
