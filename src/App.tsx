import React from 'react'
import { Route } from 'react-router'

import './App.css'

import SideBar from './components/SideBar/SideBar'
import HomePage from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <SideBar className="side-bar" />
      <main style={{paddingLeft: '200px'}}>
        <Route path="/home" exact component={ HomePage } />
      </main>
    </div>
  );
}

export default App;
