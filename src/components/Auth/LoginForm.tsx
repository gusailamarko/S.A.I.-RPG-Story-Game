import { useState } from "react";
import Button from "../Button"
import { useNavigate } from "react-router-dom";
import Feedback from "../Feedback";

interface LoginFormProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginForm = ({onClick}:LoginFormProps) => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "error">("error");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [usePopUp, setUsePopUp] = useState(false);
  const [forgottenPwWindow, setForgottenPwWindow] = useState(false);

  const showFeedback = (type: "success" | "error", msg: string, duration = 3000) => {
    setFeedbackType(type);
    setFeedbackMsg(msg);
    setUsePopUp(true);
    setTimeout(() => setUsePopUp(false), duration);
  }

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        if(!email || !password) {
            showFeedback("error", "Please fill in all fields!", 3000);
        }
        else if(!email.includes("@")) {
            showFeedback("error", "Invalid email!", 3000);
        }
        else
        {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({email, password})
            });

            if(!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "Something went wrong, try again later!");
            }

            //const data = await response.json(); upload into user state (useAuth)

            showFeedback("success", "Logged in successfully!", 1000);
            setTimeout(() => navigate('/home'), 1000);
        }

    }
    catch (error) {
        showFeedback("error", error instanceof Error ? error.message : "Something went wrong, try again later!", 3000);
    }
  }

  //const handleForgottenPassword

  return (
    <div>
        {usePopUp && (
            <Feedback type={feedbackType} msg={feedbackMsg} />
        )}

        {forgottenPwWindow && (
            <div className="w-[80dvw] md:w-[50dvw] xl:w-[40dvw] ResetLinkModal AuthForm">
                <form className="flex flex-col items-center gap-[1rem]">
                    <div className="flex justify-center items-center w-[100%] relative">
                        <h2 className="text-[1.5rem]">Reset link</h2>
                        <svg onClick={() => setForgottenPwWindow(false)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-x-circle-fill absolute top-[0.5rem] right-[0.5rem] hover:cursor-pointer" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col w-[100%] AuthFormElement">
                        <label htmlFor="forgotPasswordEmail">Email:</label>
                        <input type="text" name="forgotPasswordEmail" id="forgotPasswordEmail" />
                    </div>
                    <div>
                        <Button type="submit" usage="MainActionBtn my-[0.5rem] tracking-[5%]" label="SEND RESET LINK"/>
                    </div>
                </form>
            </div>
        )}

        <form className="flex flex-col items-center w-[70dvw] md:w-[40dvw] xl:w-[30dvw] AuthForm" onSubmit={handleLogin}>
            <div className="flex flex-col items-center">
                <img className="w-[150px] h-[100%] mb-[-0.5rem]" src="src/assets/sai_rpg_logo.webp" alt="SAI RPG App Logo" />
                <h1 className="text-[1.75rem] md:text-[2rem] tracking-[10%] mb-[1rem]">SIGN IN</h1>
            </div>
            <div className="w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="relative w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="password">Password:</label>
                <div className="relative w-full">
                    <input className="w-full" type={passwordVisibility ? "text" : "password"} name="password" id="password" />
                    <button type="button" onClick={() => setPasswordVisibility((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors" aria-label={passwordVisibility ? "Hide password" : "Show password"}>
                        {passwordVisibility ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round"/>
                        </svg>
                        ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        )}
                    </button>
                </div>                
            </div>
            <div className="text-[14px] text-center tracking-[5%] text-[#ffa000] my-[0.5rem]">
                <p>Don't have an account?</p>
                <p>Register <u onClick={onClick} className="hover:cursor-pointer text-[16px]">HERE</u></p>
            </div>
            <div className="text-[14px] text-center tracking-[5%] text-[#ffa000]">
                <p onClick={() => setForgottenPwWindow(true)} className="hover:cursor-pointer">Forgot your password?</p>
            </div>
            <div>
                <Button type="submit" usage="MainActionBtn my-[0.5rem] tracking-[5%]" label="LOGIN"/>
            </div>
        </form>
    </div>
  )
}

export default LoginForm