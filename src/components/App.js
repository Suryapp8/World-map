import '../css/App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Worldmap from './Worldmap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Worldmap/>
      <Footer/>
    </div>
  );
}

export default App;
