import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Players from './components/Players/Players';

function App() {
  return (
    <div>
      <Header/>
      <Players/>
    </div>
  );
}

export default App;
