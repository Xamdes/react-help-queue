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
import c from './../constants';

class App extends React.Component
{
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
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

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
  masterTicketList: PropTypes.object,
  dispatch: PropTypes.func
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
