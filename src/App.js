import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TalkToAstrologers from './components/routers/TalkToAstrologers';
import { Route, BrowserRouter as Router,Redirect,Link,Switch } from 'react-router-dom';
import HomePage from './components/routers/HomePage';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{overflow:"auto"}}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/talk' component={TalkToAstrologers}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
