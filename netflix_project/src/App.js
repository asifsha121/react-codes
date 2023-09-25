import React from "react";
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/banner';
import Rowpost from'./components/Rowpost/Rowpost';
import { actions,originals } from "./components/urls";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix originals"/>
      <Rowpost url={actions} title='Action' size='true' />
    </div>
  );
}
export default App;

