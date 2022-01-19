import './App.css';
import Timer from './components/Timer/Timer';
import Wrapper from './components/Timer-page/Wrapper';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wrapper>
        <Timer/>
      </Wrapper>
    </div>
  );
}

export default App;
