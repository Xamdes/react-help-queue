#!/usr/bin/env bash

cd ./src/components

echo "import styled from 'styled-components';
function $1(){
  return (
  <Main>
  <h1>$1 Component Created Successfully</h1>
  </Main>
  );
}

export default $1;

const Main = styled.div\`
  background-color: black;
  fontFamily: sans-serif;
  paddingTop: 50px;
  color: white;
  \`
;

" > "$1.jsx"
