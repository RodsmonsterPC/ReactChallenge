import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";

const LoginUser = () => {
  return (
    <div>
      <Navbar isLogginIn={true} />
      <br />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginUser;
