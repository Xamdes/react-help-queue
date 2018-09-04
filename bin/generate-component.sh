#!/usr/bin/env bash

cd ./src/components

echo "import React from \"react\";

function $1(){
  return (
  <div>
  Insert Code Here
  </div>
  );
}

export default $1;
" > "$1.jsx"
