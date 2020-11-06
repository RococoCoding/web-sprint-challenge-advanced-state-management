import React, { useEffect } from "react";
import {connect} from "react-redux";
import "./App.css";
import {getSmurfs} from '../actions/getSmurfs';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';

function App(props) {
  useEffect(()=>{
    props.getSmurfs()
  },[]);
 
  return (
    <div className="App">
      <SmurfsList />
      <SmurfForm />
    </div>
  );
}

export default connect(null, {getSmurfs})(App);
