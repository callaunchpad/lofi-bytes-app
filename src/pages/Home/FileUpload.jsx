import React from 'react';
import axios from 'axios';
import { FileUploader } from 'react-drag-drop-files';
import Synth from '@/components/Synth/Synth.jsx';
const fileTypes = ['MID'];

export default function Upload() {
  // FileUploader handles file type, so techinically, no error should be thrown.
  //const [error, setError] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const handleFileUpload = (event) => {
    //props.setFile;
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    var formData = new FormData();
    formData.append('file', file);
    //console.log(formData.entries);
    //console.log(props.file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post('http://latte.csua.berkeley.edu:8089/test', formData, {
        headers: {
          //'Access-Control-Allow-Methods': 'POST',
          //'Content-Disposition': 'inline; filename=output.mid',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          //"x-rapidapi-host": "file-upload8.p.rapidapi.com",
          //"x-rapidapi-key": "your-rapidapi-key-here",
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        // handle the response
        //console.log(response);
        setFile(response.data);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };
  const handleError = (error) => {
    setError(error);
  };
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <Synth file={file} />
    </div>

    /*
    <div>
      <h1>Inputting Data</h1>
      <h2>Upload your CSV file here.</h2>
      <FileUploader
        multiple={false}
        handleChange={handleFileUpload}
        name="file"
        label="Upload or drop a file right here."
        hoverTitle="Drop here."
        types={fileTypes}
        fileOrFiles={null}
        onTypeError={setError}
      />
    </div>
    */
  );
}
/*
const FileUpload = () => {
  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append('file', file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post(
        'http://latte.csua.berkeley.edu:8089/test',

        {
          file: file,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            //'x-rapidapi-host': 'file-upload8.p.rapidapi.com',
            //'x-rapidapi-key':
            //'51ad35335cmsh04a87d0c77fd495p1ac5b6jsna8f80e8405f0',
          },
        },
        
      )
      .then((response) => {
        // handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };
  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  const [error, setError] = React.useState(null);
  const handleError = (error) => {
    setError(error);
  };
  return (
    <div>
      <h1>Inputting Data</h1>
      <h2>Upload your CSV file here.</h2>
      <FileUploader
        multiple={false}
        handleChange={handleFileUpload}
        name="file"
        label="Upload or drop a file right here."
        hoverTitle="Drop here."
        types={fileTypes}
        fileOrFiles={null}
        onTypeError={setError}
      />
    </div>
  );
};
export default FileUpload;
*/
