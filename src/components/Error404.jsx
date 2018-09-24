/*
* Copy to other files
* import Error404 from './Error404';
* <Error404/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function Error404(props){
  return (
    <Main>
      <h1>The page {props.location.pathname} does not exist!</h1>
    </Main>
  );
}

Error404.propTypes = {
  location: PropTypes.string,
};

export default Error404;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
