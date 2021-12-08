import VendingMachine from './VendingMachine'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
