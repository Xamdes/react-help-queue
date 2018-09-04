#!/usr/bin/env bash

cd ./src/components

echo "import React from \"react\";
import PropTypes from \"prop-types\";

function $1(){
  return (
  <div>
  Insert Code Here
  </div>
  );
}

$1.propTypes = {
  // example: PropTypes.string,
};

export default $1;

/*
propTypes Examples
 */
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
" > "$1.jsx"
