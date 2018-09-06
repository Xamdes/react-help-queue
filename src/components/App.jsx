import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import NewTicketForm from './NewticketForm';
import NoRoute from './NoRoute';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route path='/styles' component={MyStyledComponent} />
        <Route component={NoRoute} />
      </Switch>
    </div>
  );
}

export default App;
