import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main/Main";
import RightSidebar from "./RightSidebar/RightSidebar";
import {postTextChange} from "./store/store";

function App(props) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <div className="app__wapper">
                  <Sidebar sidebar={props.state.sidebar}/>
                  <Main state={props.state} dispatch={props.dispatch} />
                  <RightSidebar/>
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
