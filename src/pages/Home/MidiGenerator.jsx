import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Synth from '@/components/Synth/Synth.jsx';
import Typography from '@mui/material/Typography';

export default function MidiGenerator() {
  // FileUploader handles file type, so techinically, no error should be thrown.
  const [file, setFile] = React.useState(null);
  const [generating, setGenerating] = React.useState("");

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handlePreloadedMIDI = () => {
    generateMIDI("");
  };
  
  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    generateMIDI(file);
  };

  const generateMIDI = (midiFile) => {
    var formData = new FormData();
    console.log(midiFile);
    formData.append('file', midiFile);
    // If no file, then let API know we want to use a random primer
    const use_random = midiFile ? "false" : "true";
    formData.append('use_random', use_random);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    setGenerating("GENERATING... will take a few seconds!");
    axios
      .post('http://latte.csua.berkeley.edu:8089/generate', formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        // handle the response
        setFile(response.data);
        setGenerating("");
      })
      .catch((error) => {
        // handle errors
        const data = JSON.parse(new TextDecoder().decode(error.response.data));
        setGenerating(data.message);
      });
  }

  return (
    <div>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Typography variant="body1" color="text.primary" style={{ fontSize: '20px'}}>
        <Button variant="contained"
          style={{ fontSize: '1.3rem'}}
          onClick={handleClick}>
            upload .mid file
        </Button>
        <input 
          type="file" 
          ref={hiddenFileInput}
          onChange={handleFileUpload}
          style={{display:'none'}} />
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontSize: '20px'}}>
        <Button variant="contained"
          style={{ fontSize: '1.3rem'}}
          onClick={handlePreloadedMIDI}>
            use random .mid
        </Button>
        </Typography>
      </Stack>
      <Synth file={file} generating={generating}/>
    </div>
  );
}