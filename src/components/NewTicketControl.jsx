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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleOnPage: !this.state.formVisibleOnPage});
  }

  render(){
    let currentVisibleContent = null;
    if(this.state.formVisibleOnPage)
    {
      currentVisibleContent = <NewTicketForm/>;
    }
    else
    {
      currentVisibleContent =<ConfirmationQuestions/>
    }
    return (
      <Main>
        {/*
          <h1>NewTicketControl Component Created Successfully</h1>
          <button className="btn btn-dark" onClick={this.handleClick}>Toggle Form!</button>
          */}
        {currentVisibleContent}
      </Main>
    );
  }

}

export default NewTicketControl;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
