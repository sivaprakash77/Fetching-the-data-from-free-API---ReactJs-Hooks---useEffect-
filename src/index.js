import React from 'react';
import ReactDOM from 'react-dom';
import Datafetching from './Component/datafetching.js';

function Executer(){
  return(
  <div>
     <Datafetching/>
  </div>
  )
}
ReactDOM.render(<Executer/>,document.getElementById('root'));
