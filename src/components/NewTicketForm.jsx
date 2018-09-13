/*
* Copy to other files
* import NewTicketForm from './NewTicketForm';
* <NewTicketForm/>
*/
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function NewTicketForm(props)
{
  let _names, _location, _issue;
  _names = _location = _issue = null;
  function handleNewTicketFormSubmission(event)
  {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
    props.onHandleClickConfirmation();
  }

  return (
    <Main className="container">
      <form className="row" onSubmit={handleNewTicketFormSubmission}>
        <input
          className="col-md-3"
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          className="col-md-3"
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          className="col-md-3"
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button className="col-md-3" type='submit' >Help!</button>
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

NewTicketForm.propTypes = {
  // [variable-name]: PropTypes.string,
  onHandleClickConfirmation: PropTypes.funct,
  onNewTicketCreation: PropTypes.func
};
