/*
* Copy to other files
* import ConfirmationQuestions from './ConfirmationQuestions';
* <ConfirmationQuestions/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function ConfirmationQuestions(props){
  return (
    <Main>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button className="btn btn-dark" onClick={props.onHandleClickConfirmation}>Yes</button>
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

ConfirmationQuestions.propTypes = {
  // [variable-name]: PropTypes.string,
  onHandleClickConfirmation: PropTypes.funct
};
