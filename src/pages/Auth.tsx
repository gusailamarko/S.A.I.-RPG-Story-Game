import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const Auth = () => {
  const [action, setAction] = useState("login");

  return (
    <main className="flex flex-col items-center justify-center h-[100dvh] InitialPage">
        {action == "login" && (
            <LoginForm onClick={() => setAction("register")} />
        )}
        {action == "register" && (
            <RegisterForm onClick={() => setAction("login")} />
        )}
    </main>
  )
}

export default Auth