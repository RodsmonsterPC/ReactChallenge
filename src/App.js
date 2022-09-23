import { Route, Routes, BrowserRouter } from "react-router-dom";
import { IdContextProvider } from "./components/context/idContext";
import EditPost from "./Pages/EditPost";
import DetailPost from "./Pages/DetailPost";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <IdContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpost/:postId" element={<DetailPost />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </IdContextProvider>
    </BrowserRouter>
  );
}

export default App;
