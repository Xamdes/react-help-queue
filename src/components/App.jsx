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
  render(){
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
}

export default App;

const Main = styled.div`

`;

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];
