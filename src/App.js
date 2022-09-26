import { Route, Routes, BrowserRouter } from "react-router-dom";
import { IdContextProvider } from "./components/context/idContext";
import EditPost from "./Pages/EditPost";
import DetailPost from "./Pages/DetailPost";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <IdContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpost/:postId" element={<DetailPost />} />
          <Route path="/editpost/:postId" element={<EditPost />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </IdContextProvider>
    </BrowserRouter>
  );
}

export default App;
