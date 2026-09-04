import { useState } from "react";
import Button from "../Button"
import { useNavigate } from "react-router-dom";
import Feedback from "../Feedback";

interface RegisterFormProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RegisterForm = ({onClick}:RegisterFormProps) => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordAgainVisibility, setPasswordAgainVisibility] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "error">("error");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [usePopUp, setUsePopUp] = useState(false);

  const showFeedback = (type: "success" | "error", msg: string, duration = 3000) => {
    setFeedbackType(type);
    setFeedbackMsg(msg);
    setUsePopUp(true);
    setTimeout(() => setUsePopUp(false), duration);
  }

  const handleRegister = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("usernameReg") as string;
    const email = formData.get("emailReg") as string;
    const password = formData.get("passwordReg") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    try {
        if(!username || !email || !password || !passwordConfirm) {
            showFeedback("error", "Please fill in all fields!", 3000);
        } 
        else if(!email.includes('@')) {
            showFeedback("error", "Invalid email!", 3000);
        }
        else if(!passwordRegex.test(password))
        {
            showFeedback("error", "Incorrect password format! (min. 8 characters, at least 1 lowercase, 1 uppercase and 1 special character needed)", 3000);
        }
        else if(!(password == passwordConfirm))
        {
            showFeedback("error", "The passwords don't match!", 3000);
        }
        else
        {
            const response = await fetch("/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({username, email, password, passwordConfirm})
            });

            if(!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "Something went wrong, try again later!");
            }

            //const data = await response.json();

            showFeedback("success", "Account created successfully!", 1000);
            setTimeout(() => navigate('/home'), 1000);
        }
    }
    catch (error) {
        showFeedback("error", error instanceof Error ? error.message : "Something went wrong, try again later!", 3000);
    }
  };

  return (
    <div>
        {usePopUp && (
            <Feedback type={feedbackType} msg={feedbackMsg} />
        )}
        
        <form className="flex flex-col items-center w-[70dvw] md:w-[40dvw] xl:w-[30dvw] AuthForm" onSubmit={handleRegister}>
            <div className="flex flex-col items-center">
                <img className="w-[150px] h-[100%] mb-[-0.5rem]" src="src/assets/sai_rpg_logo.webp" alt="SAI RPG App Logo" />
                <h1 className="text-[1.75rem] md:text-[2rem] tracking-[10%] mb-[1rem]">SIGN UP</h1>
            </div>
            <div className="w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="usernameReg">Username:</label>
                <input type="text" name="usernameReg" id="usernameReg" />
            </div>
            <div className="w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="emailReg">Email:</label>
                <input type="email" name="emailReg" id="emailReg"/>
            </div>
            <div className="w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="passwordReg">Password:</label>
                <div className="relative w-full">
                    <input className="w-full" type={passwordVisibility ? "text" : "password"} name="passwordReg" id="passwordReg" />
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
            <div className="w-[100%] md:w-[90%] AuthFormElement">
                <label htmlFor="passwordConfirm">Password again:</label>
                <div className="relative w-full">
                    <input className="w-full" type={passwordAgainVisibility ? "text" : "password"} name="passwordConfirm" id="passwordConfirm" />
                    <button type="button" onClick={() => setPasswordAgainVisibility((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors" aria-label={passwordVisibility ? "Hide password" : "Show password"}>
                        {passwordAgainVisibility ? (
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
                <p>Already have an account?</p>
                <p>Log in <u onClick={onClick} className="hover:cursor-pointer text-[16px]">HERE</u></p>
            </div>
            <div>
                <Button type="submit" usage="MainActionBtn my-[0.5rem]" label="REGISTER"/>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm