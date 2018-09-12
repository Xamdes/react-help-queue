/*
* Copy to other files
* import ConfirmationQuestions from './ConfirmationQuestions';
* <ConfirmationQuestions/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function ConfirmationQuestions(){
  return (
    <Main>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button className="btn btn-dark">Yes</button>
    </Main>
  );
}

export default ConfirmationQuestions;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
