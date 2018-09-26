import Admin from './Admin';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';
import { withRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
// import Moment from 'moment';
import { connect } from 'react-redux';

class App extends React.Component
{
  // constructor(props)
  // {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     selectedTicket: null
  //   };
  //   // this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  //   this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  // }

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
    // let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  // handleChangingSelectedTicket(ticketId)
  // {
  //   this.setState({selectedTicket: ticketId});
  // }

  render()
  {
    return (
      <Main >
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
            <Route path='/newticket' component={NewTicketControl}/>
            <Route path='/styles' component={MyStyledComponent} />
            <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Main>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

const MyConnectedComponent = withRouter(connect(mapStateToProps)(App));

export default MyConnectedComponent;

const Main = styled.div`
background-color: darkgrey;
background-size: auto;
`;
