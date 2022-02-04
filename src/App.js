import './App.css';
import React, { useState } from 'react'
import useToggle from './Hooks/useToggle';
import LifecycleClass from './LifecycleClass';
import LifecycleFunc from './LifecycleFunc';
import useWindow from './Hooks/useWindow';
import Size from './Size';
import Count from './Count';

function App() {
  const [ showClass, toggleClass ] = useToggle(true);
  const [ showFunc, toggleFunc ] = useToggle(true);
  const [ showSize, toggleSize ] = useToggle(true);
  const [ stateFromApp, setStateFromApp ] = useState(0);
  const windowSize = useWindow();
  console.log('App component rendering')
  return (
    <div className="App">
      <div onClick = {toggleSize}>
        <p>Toggle Size Component</p>
      </div>
      {showSize && <Size />} 
      <Count />
     {/* <h1>App Home</h1>
     <button onClick = {()=>setStateFromApp(Math.random())}>Change App State</button>
     {showClass && <LifecycleClass propFromApp={stateFromApp}/>}
      <button onClick = {toggleClass}>Toggle</button>
      <div onClick ={toggleFunc}>
        <p>Toggle Functional Component</p>
      </div>
      {showFunc && <LifecycleFunc propFromApp={stateFromApp} />} */}
    </div>
  );
}

export default App;