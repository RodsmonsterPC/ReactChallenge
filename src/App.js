import AsideRight from "./components/AsideRight2/AsideRight";
import AsideLeft from "./components/AsideLeft2/AsideLeft";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { IdContextProvider } from "./components/context/idContext";
import EditPost from "./Pages/EditPost";
import DetailPost from "./Pages/DetailPost";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import LoginUser from "./Pages/LoginUser";
import CreateUser from "./Pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <IdContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailpost/:postId" element={<DetailPost />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/enter" element={<LoginUser/>} /> 
          <Route path="/newUser" element={<CreateUser/>} /> 
        </Routes>
      </IdContextProvider>
    </BrowserRouter>

  );
}

export default App;
