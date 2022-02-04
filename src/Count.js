import { useReducer } from "react";

const Count = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const countReducer = (state, action)=>{
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'MINUS':
        return state - 1;
      case 'MULTIPLY':
        return state * action.payload;
      case 'DIVIDE':
        return state / action.payload;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(countReducer, 10);
  
  const add = () =>{
    dispatch({type: "ADD"})
  };

  const minus = () =>{
    dispatch({type: "MINUS"})
  };
  
  const multiply = () =>{
    dispatch({type: "MULTIPLY", payload:2})
  };

  const divide = () =>{
    dispatch({type: "DIVIDE", payload:2})
  };

  return(
    <div>
      <h1>Count</h1>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
    </div>
  )
};

export default Count;

// What is a reducer? - A function that takes state and an action
// returns new state