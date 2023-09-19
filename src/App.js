import './App.css';
import Coach from './components/Coach';
import Diplomes from './components/Diplomes';
import FirstPart from './components/FirstPart';
import Footer from './components/Footer';
import Header from './components/Header';
import Partenaires from './components/Partenaires';
import SecondPart from './components/SecondPart';
import Testimonials from './components/Testimonials';
import ThirdPart from './components/ThirdPart';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <Diplomes />
      <Coach />
      <Testimonials />
      <Partenaires />
      <Footer />
    </div>
  );
}

export default App;
