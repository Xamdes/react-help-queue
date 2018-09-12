import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
// import NewTicketForm from './NewticketForm';
import NoRoute from './NoRoute';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

function App()
{
  return (
    <Main className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route path='/styles' component={MyStyledComponent} />
        <Route component={NoRoute} />
      </Switch>
    </Main>
  );
}

export default App;

const Main = styled.div`

`;
