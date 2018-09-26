/*
* Copy to other files
* import NewTicketForm from './NewTicketForm';
* <NewTicketForm/>
*/
import styled from 'styled-components';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

// import { Link, Switch, Route } from 'react-router-dom';

function NewTicketForm(props)
{
  console.log(props);
  let _names, _location, _issue;
  _names = _location = _issue = null;
  function handleNewTicketFormSubmission(event)
  {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
    props.onTroubleshootingConfirmation();
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
        <button className="btn btn-light col-md-3" type='submit' >Help!</button>
      </form>
    </Main>
  );
}

NewTicketForm.propTypes = {
  onTroubleshootingConfirmation: PropTypes.funct,
  dispatch: PropTypes.func
};

export default connect()(NewTicketForm);

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
