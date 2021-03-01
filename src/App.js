import './App.css';
import Header from './components/Header/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;
