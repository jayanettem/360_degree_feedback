import logo from './logo.svg';
import './App.css';
import Questions from './components/setOfQuestions';
function App() {
  var res=Array(5).fill(0);
  return (
    <div className='App'>
          <Questions />
    </div>
  )
}

export default App;
