/*
* Copy to other files
* import NewTicketControl from './NewTicketControl';
* <NewTicketControl/>
*/
import styled from 'styled-components';
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
    this.setState({formVisibleOnPage: true});
  }

  render(){
    return (
      <Main>
        <h1>NewTicketControl Component Created Successfully</h1>
        <button className="btn btn-dark" onClick={this.handleClick}>Show Form!</button>
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
