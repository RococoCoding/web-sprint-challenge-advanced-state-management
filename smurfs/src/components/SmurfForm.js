import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions/addSmurfs';

function SmurfForm(props) {
  const [input, setInput] = useState({name: "", age: 1, height: ""});

  function changeHandler(e) {
    if (e.target.name === "name") {
      setInput({...input, name: e.target.value})
    }
    else if (e.target.name === "age") {
      setInput({...input, age: e.target.value})
    }
    else {
      setInput({...input, height: e.target.value})
    }
  }

  function addSmurf(e) {
    e.preventDefault();
    props.addSmurfs(input)
  }

  return(
    <form onSubmit={addSmurf}>
      <h3>Add a Smurf</h3>
      <label htmlFor="name">Name:
      <input
        name="name"
        id="name"
        type="text"
        value={input.name}
        onChange={changeHandler}
      />
      </label>
      
      <label htmlFor="age">Age:
      <input 
        name="age"
        id="age"
        type="number"
        value={input.age}
        onChange={changeHandler}
      />
      </label>

      <label htmlFor="height">Height:
      <input 
        name="height"
        id="height"
        type="text"
        value={input.height}
        onChange={changeHandler}
      />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default connect(null, {addSmurfs})(SmurfForm);