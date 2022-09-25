import { useEffect, useState } from "react";
import Login from "../components/Login/Login";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(()=>{
    fetch()
  })

  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};
