//import PropTypes from 'prop-types';
import styled from 'styled-components';

function MyStyledComponent(){
  return (
    <Main className="card">
      <h1 className="card-title">Hey, I'm a component</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
      <button className="btn btn-danger">Test</button>
      <ButtonTest className="btn">Test</ButtonTest>
    </Main>
  );
}

export default MyStyledComponent;

const ButtonTest = styled.button`
  background-color: red;
  &:hover ${ButtonTest} {
    background-color: teal;
  }
`;

const Main = styled.div`
  background-color: #ecf0f1;
  font-family: sans-serif;
  padding-top: 50px;
  `
;
