import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
// import NewTicketForm from './NewticketForm';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  render(){
    return (
      <Main >
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/styles' component={MyStyledComponent} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Main>
    );
  }

  handleAddingNewTicketToList(newTicket) {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }
}

export default App;

const Main = styled.div`
  background-color: darkgrey;
  background-size: auto;
`;
