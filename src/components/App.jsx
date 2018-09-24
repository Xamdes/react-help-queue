import Admin from './Admin';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'moment';
import { v4 } from 'uuid';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount()
  {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime()
  {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket)
  {
    let newTicketId = v4();
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId)
  {
    this.setState({selectedTicket: ticketId});
    // alert('The selected ticket is now: ' + this.state.selectedTicket.names);
  }

  render()
  {
    return (
      <Main >
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/styles' component={MyStyledComponent} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList}
              currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
background-color: darkgrey;
background-size: auto;
`;
