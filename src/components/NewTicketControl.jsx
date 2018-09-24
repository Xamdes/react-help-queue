/*
* Copy to other files
* import NewTicketControl from './NewTicketControl';
* <NewTicketControl/>
*/
import styled from 'styled-components';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
// import { Link, Switch, Route } from 'react-router-dom';

class NewTicketControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation() {
    this.setState({formVisibleOnPage: !this.state.formVisibleOnPage});
  }

  render(){
    let currentVisibleContent = null;
    if(this.state.formVisibleOnPage)
    {
      currentVisibleContent = <NewTicketForm onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    else
    {
      currentVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
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
