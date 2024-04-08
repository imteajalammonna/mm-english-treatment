import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
