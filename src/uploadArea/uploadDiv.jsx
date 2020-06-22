import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from './../redux/action';
import './uploadDiv.css';
import axios from 'axios';
import { apiUrl } from './../config';

const uploadFile = async () => {
  let fileInput = document.querySelector('#file-input');
  let file_name = document.querySelector('#file-name');
  if (fileInput.files.length <= 0 || !file_name.value) {
    return;
  }
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  formData.append('file_name', file_name.value);
  try {
    const result = await axios.post(apiUrl, formData);
    if (result.status === 201) {
      file_name.value = '';
      fileInput.files = null;
      console.log(result.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const UploadDiv = () => {
  const dispatch = useDispatch();
  dispatch(setTitle('Upload Files'));
  return (
    <React.Fragment>
      <div className="upload">
        <label>
          <i className="fa fa-file" aria-hidden="true"></i>
          <input
            type="file"
            id="file-input"
            onChange={(e) => {
              document.querySelector('.upload i').style.color = 'blue';
            }}
          />
        </label>
        <span className="description">Enter File Name</span>
        <input type="text" id="file-name" />
        <button className="upload-btn" onClick={uploadFile}>
          Upload
        </button>
      </div>
    </React.Fragment>
  );
};

export default UploadDiv;
