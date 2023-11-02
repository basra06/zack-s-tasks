import './App.css';
import Cards from './components/card';
import NavBar from './components/navbar';
import PropertiesBadges from './components/props';

function App() {
  return (
    <>
    <NavBar/>
    <PropertiesBadges/>
      <Cards/>
    </>
  );
}

export default App;
