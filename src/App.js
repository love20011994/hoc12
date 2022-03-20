import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
     
     <CounterOne username = "habsy"/> 
      <hr/>
      <CounterTwo username="luv"/><hr></hr>
     <CounterThree username="kush"/>

</div>
  );
}

export default App;