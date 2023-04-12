import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useNavigate } from 'react-router-dom';

const fileTypes = ['MID'];

export default function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    //send file to ML

    //reroute
    navigate('/home');
  };
  // FileUploader handles file type, so techinically, no error should be thrown.
  const [error, setError] = useState(null);
  const handleError = (error) => {
    setError(error);
  };
  return (
    <div>
      <h1>Inputting Data</h1>
      <h2>Upload your MIDI file here.</h2>
      <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        label="Upload or drop a file right here."
        hoverTitle="Drop here."
        types={fileTypes}
        fileOrFiles={null}
        onTypeError={setError}
      />
      <p>{file ? `File name: ${file['name']}` : 'No files uploaded yet.'}</p>
    </div>
  );
}
