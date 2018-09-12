/*
* Copy to other files
* import NewTicketForm from './NewTicketForm';
* <NewTicketForm/>
*/
import styled from 'styled-components';
// import { Link, Switch, Route } from 'react-router-dom';

function NewTicketForm(){
  return (
    <Main>
      <form className="row">
        <input
          className="col-md-3"
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          className="col-md-3"
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          className="col-md-3"
          id='issue'
          placeholder='Describe your issue.'/>
        <button className="col-md-3" type='submit'>Help!</button>
      </form>
    </Main>
  );
}

export default NewTicketForm;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
