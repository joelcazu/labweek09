import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">

      <img src={logo} className= "Logo" alt="Logo" />
      <h1> {props.welcome}</h1>
      <h2> {props.className}</h2>
      <h3> {props.sid}</h3>
      <h4> {props.studentName}</h4>
      <h5> {props.institution}</h5>
    </div>
  );
}

export default App;

