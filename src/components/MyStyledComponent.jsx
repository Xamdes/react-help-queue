import React from "react";
import PropTypes from "prop-types";
// import {Card} from 'reactstrap';

function MyStyledComponent(){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
  <div className="card" style={myStyledComponentStyles}>
    <h1 className="card-title">Hey, I'm a component</h1>
    <h2>But there's something different about me...</h2>
    <h3>Unlike other components you have worked with thus far....</h3>
    <h4>I also include custom CSS styles!</h4>
    <p>Pretty cool, right</p>
    <button className="btn btn-danger">Test</button>
  </div>
  );
}

MyStyledComponent.propTypes = {
  // example: PropTypes.string,
};

export default MyStyledComponent;

/*
propTypes Examples
exampleArray: PropTypes.array,
exampleBoolean: PropTypes.bool,
exampleFunction: PropTypes.func,
exampleNumber: PropTypes.number,
exampleObject: PropTypes.object,
exampleString: PropTypes.string,
exampleSymbol: PropTypes.symbol,
exampleReactElement: PropTypes.element,
exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),
*/
