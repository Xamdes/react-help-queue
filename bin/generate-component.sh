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
" > "$1.jsx"
