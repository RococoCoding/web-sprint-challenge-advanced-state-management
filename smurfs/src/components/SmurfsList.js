import React from 'react';
import Smurf from './Smurf';
import {useSelector} from 'react-redux';

function SmurfList() {
  const smurfsList = useSelector(state=>state)
  if (!smurfsList) {
    return (<div>Loading...</div>)
  }
  return(
    <div>
      Smurf List
       {smurfsList.map((smurf, idx)=>{
        return <Smurf key={idx} smurf={smurf}/>
      })}
    </div>
  )
}

export default SmurfList;