import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

  const name = 'Maria';

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName name="Gabriel" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Pessoa name="Gabriel" age="24" jobs="Programador" photo="https://via.placeholder.com/150"/>
      
    </div>
  );
}

export default App;
