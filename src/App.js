import { Route, Routes, BrowserRouter } from "react-router-dom";
import { IdContextProvider } from "./components/context/idContext";
import CreatePost from "./Pages/CreatePost";
import DetailPost from "./Pages/DetailPost";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <IdContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpost" element={<DetailPost />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </IdContextProvider>
    </BrowserRouter>
  );
}

export default App;
