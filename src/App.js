import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FirstBox from './components/FirstBox';
import CardComponent from './components/Card';
import SecondBox from './components/SecondBox';
import ThirdBox from './components/ThirdBox';

function App() {
  return (
    <div style={{overflow:"auto"}}>
      <Header></Header>
      <CardComponent></CardComponent>
      <FirstBox></FirstBox>
      <SecondBox></SecondBox>
      <ThirdBox></ThirdBox>
    </div>
  );
}

export default App;
