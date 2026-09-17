// question :- Buiild a file uploader component that allows users to upload images.

import React, { useState } from 'react'

const FileUploader = () => {

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setFile(selectedFile);
  }

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-6 text-center">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">File Upload</h2>

        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-blue-500/50 rounded-xl cursor-pointer bg-[#18181c] hover:bg-white/5 transition-colors">
          <span className="text-sm text-zinc-400 font-medium">Click to select image</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>

        {file && (
          <div className="w-full flex-col flex items-center gap-2 pt-4 border-t border-white/5">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Preview</span>
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded Preview"
              className="w-full aspect-square object-cover rounded-xl border border-white/10 shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FileUploader