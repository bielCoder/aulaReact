import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const name = 'Maria';

  return (
    <div className="App">
      <SayMyName name="Gabriel" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Pessoa name="Gabriel" age="24" jobs="Programador" photo="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
