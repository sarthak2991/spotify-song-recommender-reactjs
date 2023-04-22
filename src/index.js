// client-side js, loaded by index.html
import React from "react";
import  ReactDOM  from "react-dom";
import Form from "./form";
import History from "./history";
import './style.css'


function App(){
  return <>
    <h1>Discover new tunes!</h1>
    <hr />
    <Form />
    <History />
  </>
}

ReactDOM.render(<App/>,document.getElementById('main-content'))