import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function NoRoute(){
  return (
    <Main>
      <h1>NoRoute Component Created Successfully</h1>
    </Main>
  );
}

export default NoRoute;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;

/*
* Copy to other files
* import NoRoute from './NoRoute';
* <NoRoute/>
*/

