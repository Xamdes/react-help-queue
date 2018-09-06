import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import NewticketForm from './NewticketForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
