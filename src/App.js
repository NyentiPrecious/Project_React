import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">

<Navbar/>
<Section1/>
<Section2/>


</div>
    </div>
  );
}

export default App;
