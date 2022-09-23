import AsideRight from "./components/AsideRight2/AsideRight";
import AsideLeft from "./components/AsideLeft2/AsideLeft";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AsideLeft />;
      <AsideRight />;
      <Footer />
    </div>
  );
}

export default App;
