import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFiles } from './../redux/action';
import swal from 'sweetalert';
import { apiUrl } from './../config';

const deleteFile = async (id, dispatch, files) => {
  try {
    const result = await axios.delete(`${apiUrl}/${id}`);
    if (result.status === 204) {
      files = files.filter((file) => file._id !== id);
      dispatch(setFiles(files));
    }
  } catch (error) {
    console.log(error);
  }
};

const updateFile = async (id, dispatch, files) => {
  swal({
    text: 'Enter Name',
    content: 'input',
    button: {
      text: 'OK',
      closeModal: true,
    },
  }).then(async (name) => {
    try {
      const file_name = name;
      if (!file_name) return;
      const result = await axios.patch(`${apiUrl}/${id}`, {
        file_name,
      });
      if (result.status === 200) {
        files = files.filter((file) => file._id !== id);
        files.push(result.data.file);
        dispatch(setFiles(files));
      }
    } catch (error) {
      console.log(error);
    }
  });
};

const TableRow = ({ file }) => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  return (
    <tr>
      <td>
        {file.file_name}.{file.file_type}
      </td>
      <td>
        <a
          href={`https://file-app-api.herokuapp.com${file.file_path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </td>
      <td>
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          onClick={() => updateFile(file._id, dispatch, files)}
        ></i>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => deleteFile(file._id, dispatch, files)}
        ></i>
      </td>
    </tr>
  );
};

export default TableRow;
