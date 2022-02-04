import { useState } from 'react'

// setting initial state equal to true gives it a default value if no other value is given
const useToggle = (initialState = true) => {
  const [showToggle, setToggle] = useState(initialState);

  const Toggler = () =>{
    setToggle(!showToggle)
  };

  return[ showToggle, Toggler ];
};

export default useToggle