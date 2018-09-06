#!/usr/bin/env bash

cd ./src/components

echo "import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

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
font-family: sans-serif;
padding-top: 50px;
color: white;
\`;
" > "$1.jsx"
