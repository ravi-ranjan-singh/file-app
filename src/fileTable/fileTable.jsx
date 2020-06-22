import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFiles, setTitle } from './../redux/action';
import { apiUrl } from './../config';
import axios from 'axios';
import TableRow from './tablerow';
import './fileTable.css';

class FilesTable extends Component {
  componentDidMount = async () => {
    try {
      const result = await axios.get(apiUrl);
      if (result.data) {
        this.props.setFilesList(result.data.files);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    this.props.setNavTitle('List/Modify Files');
    return (
      <div className="file-table">
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Link</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.files.map((file) => (
              <TableRow file={file} key={file._id}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.files,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFilesList: (files) => {
      dispatch(setFiles(files));
    },
    setNavTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilesTable);
