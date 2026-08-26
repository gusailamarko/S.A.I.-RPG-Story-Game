import { useState } from "react";
import Button from "../components/Button";

const Auth = () => {
  const [action, setAction] = useState("login");

  return (
    <main className="flex flex-col items-center justify-center h-[100dvh] InitialPage">
        <div>
            {action == "login" && (
                <form className="flex flex-col items-center w-[70dvw] md:w-[40dvw] AuthForm">
                    <div>
                        <h1 className="text-[1.75rem] tracking-[10%] mb-[1rem]">SIGN IN</h1>
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="text-[12px] text-center tracking-[5%] text-[#ffa000] my-[0.5rem]">
                        <p>Don't have an account?</p>
                        <p>Register <u onClick={() => setAction("register")}>HERE</u></p>
                    </div>
                    <div className="text-[12px] text-center tracking-[5%] text-[#ffa000]">
                        <p>Forgot your password?</p>
                    </div>
                    <div>
                        <Button type="submit" usage="MainActionBtn my-[0.5rem]" label="LOGIN"/>
                    </div>
                </form>
            )}
            {action == "register" && (
                <form className="flex flex-col items-center w-[70dvw] md:w-[40dvw] AuthForm">
                    <div>
                        <h1 className="text-[1.75rem] tracking-[10%] mb-[1rem]">SIGN UP</h1>
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="usernameReg">Username:</label>
                        <input type="text" name="usernameReg" id="usernameReg" />
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="emailReg">Email:</label>
                        <input type="email" name="emailReg" id="emailReg"/>
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="passwordReg">Password:</label>
                        <input type="password" name="passwordReg" id="passwordReg" />
                    </div>
                    <div className="w-[100%] md:w-[90%] FormElement">
                        <label htmlFor="passwordConfirm">Password again:</label>
                        <input type="password" name="passwordConfirm" id="passwordConfirm" />
                    </div>
                    <div className="text-[12px] text-center tracking-[5%] text-[#ffa000] my-[0.5rem]">
                        <p>Already have an account?</p>
                        <p>Log in <u onClick={() => setAction("login")}>HERE</u></p>
                    </div>
                    <div>
                        <Button type="submit" usage="MainActionBtn my-[0.5rem]" label="REGISTER"/>
                    </div>
                </form>
            )}
        </div>
    </main>
  )
}

export default Auth