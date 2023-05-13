import 'src/index.css';
import MainPage from 'src/components/mainpage';
import About from 'src/components/about';
import Works from 'src/components/works';
import Contact from 'src/components/contact';
import Background from './components/background';

function App() {
  return (
    <>
      <Background />
      <MainPage />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
