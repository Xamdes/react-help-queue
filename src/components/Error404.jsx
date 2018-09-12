/*
* Copy to other files
* import Error404 from './Error404';
* <Error404/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function Error404(){
  return (
    <Main>
      <h1>Error404 Component Created Successfully</h1>
    </Main>
  );
}

export default Error404;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;


