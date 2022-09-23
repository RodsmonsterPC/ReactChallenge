import CentralBody from "./components/CentralBody/CentralBody";
import AsideRight from "./components/AsideRight2/AsideRight";
import AsideLeft from "./components/AsideLeft2/AsideLeft";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AsideLeft />
      <CentralBody/>
      <AsideRight />
      <Footer />
    </div>
  );
}

export default App;
