import React, { memo, useEffect } from "react";

// class LifeCycleMethods extends React.Component {
//   componentDidMount() {
//     console.log("Component did mount method called!!");
//   }
//   componentDidUpdate() {
//     console.log("component did update called!!");
//   }
//   componentWillUnmount() {
//     console.log("component will unmount called!!!");
//   }
//   shouldComponentUpdate(nextProp, nextState, nextContext) {
//     console.log("should component update method called!!!");
//     console.log(
//       "nextProp::",
//       nextProp,
//       "  nextState::",
//       nextState,
//       "  nextContext::",
//       nextContext
//     );
//     return true;
//   }
//   render() {
//     console.log("render method called!!");
//     return <div>Life Cycle Methods clicked: {this.props.counter} times.</div>;
//   }
// }
const LifeCycleMethods = () => {
  const prop = 1;
  useEffect(() => {
    console.log("Equivalent of componentDidMount");
  }, []);
  useEffect(() => {
    return () => console.log("Equivalent of componentWillUnmount");
  }, []);
  useEffect(() => {
    console.log("Equivalent of componentWillRecieveProps");
  }, [prop]);

  return (
    <div>
      <h2>Implementation of Life Cycle Methods Using Hooks!</h2>
    </div>
  );
};
export default memo(LifeCycleMethods);
