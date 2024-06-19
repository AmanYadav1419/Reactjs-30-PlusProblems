// question :- Buiild a file uploader component that allows users to upload images.

import React, { useState } from 'react'

const FileUploader = () => {

const [file, setFile] = useState(null);

const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setFile(selectedFile);
}

  return (
    <div>
        <input type="file" accept='image/*' onChange={handleFileChange} />
        {file && <img src={URL.createObjectURL(file)} alt='Uploaded'/>}
    </div>
  )
}

export default FileUploader