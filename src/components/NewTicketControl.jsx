/*
* Copy to other files
* import NewTicketControl from './NewTicketControl';
* <NewTicketControl/>
*/
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
// import { Link, Switch, Route } from 'react-router-dom';

class NewTicketControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClickConfirmation = this.handleClickConfirmation.bind(this);
  }

  handleClickConfirmation() {
    this.setState({formVisibleOnPage: !this.state.formVisibleOnPage});
  }

  render(){
    let currentVisibleContent = null;
    if(this.state.formVisibleOnPage)
    {
      currentVisibleContent = <NewTicketForm onHandleClickConfirmation={this.handleClickConfirmation} onNewTicketCreation={this.props.onNewTicketCreation}/>;
    }
    else
    {
      currentVisibleContent = <ConfirmationQuestions onHandleClickConfirmation={this.handleClickConfirmation}/>;
    }
    return (
      <Main>
        {currentVisibleContent}
      </Main>
    );
  }

}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
