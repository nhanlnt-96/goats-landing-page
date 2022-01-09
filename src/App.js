import React from "react";
import MainLayout from "./page/MainLayout";

// import antd css
import 'antd/dist/antd.css';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import app css
import './styles/App.scss';
// import rwd css
import './styles/rwd.scss';

function App() {
  return (
    <div className="App">
      <MainLayout/>
    </div>
  );
}

export default App;
