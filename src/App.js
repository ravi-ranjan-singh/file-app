import React from 'react';
import NavBar from './Navbar/navBar';
import Graph from './Graph/graph';
import SideBar from './Sidebar/sideBar';
import UploadDiv from './uploadArea/uploadDiv';
import FilesTable from './fileTable/fileTable';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="main">
        <SideBar></SideBar>
        <div className="content">
          <Route exact path="/upload" component={UploadDiv}></Route>
          <Route exact path="/list" component={FilesTable}></Route>
          <Route exact path="/stats" component={Graph}></Route>
          <Route exact path="/" component={UploadDiv} />
        </div>
      </div>
    </div>
  );
}

export default App;
