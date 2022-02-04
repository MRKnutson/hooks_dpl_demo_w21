// Hook rules
// 1. name must start with 'use'
// 2. can only use hooks in funcational componentes
// 3. can only use hooks at root level of component (e.g., can't nest inside functions, loops, ifelse, etc.)

import {useState, useEffect} from 'react'

const useWindow = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  const changeWindowSize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
    console.log('Width: ', window.innerWidth);
  };


  useEffect(()=>{
    // old school javascript
    window.addEventListener('resize', changeWindowSize, true);
    return ()=> {
      window.removeEventListener('resize', changeWindowSize, true)
    };
  },[]);

  return windowSize;

};

export default useWindow;