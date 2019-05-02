import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    ///lates
  };

  decrement = () => {
    //fill later
  };

  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter-child">
          <h2>Counter Component</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //this is what is fed to your component from the react state to the props in your component
    //ie the redux state.count will now become the count in your props for this component
    count: state.count
  };
}

//connect is a higher order function that wraps the original Counter component
//connect hooks into Redux, pulls out the entire state, and passes it through mapStateRoProps
//this function is custom as it changies according to the state in Redux
export default connect(mapStateToProps)(Counter);
