import './App.css';
import Timer from './components/Timer/Timer';
import TimerPage from './components/Timer_page/TimerPage';
function App() {
  return (
    <div className="App">
      <TimerPage>
        <Timer/>
      </TimerPage>
    </div>
  );
}

export default App;
