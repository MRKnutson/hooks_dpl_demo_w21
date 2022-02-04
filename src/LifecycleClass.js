import React from 'react'

class LifecycleClass extends React.Component {
  state = {count: 0};
  // Method runs when coomponent mounts to the DOM
  constructor(props){
    super(props);
    console.log("constructor called")
  }
  componentDidMount() {
    console.log("mounted")
  };

  // when state changes
  componentDidUpdate(prevProps, prevState){
    console.log("component updated");
    console.log('current state: ', this.state)
    console.log('prev state: ', prevState)
    console.log('prev props: ', prevProps)
  };

  // Method runs when component unmounts from DOM
  componentWillUnmount(){
    console.log("unmounted")
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render () {
    console.log('render called')
    console.log('-----------------')
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <h3>Rendering propFromApp: {this.props.propFromApp}</h3>
        <button onClick = {this.add}>add</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
};

export default LifecycleClass;