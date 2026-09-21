import { useEffect, useState } from "react";

interface User {
    userid: number,
    username: string,
    displayname: string,
    role: string,
    pfp: string,
    credits: number
}

const MobileTopBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
        const getLoggedInUserData = async () => {
            try {
                isLoading(true);
                const loggedInUser = await fetch('/api/auth/getMe');
    
                if(!loggedInUser.ok) {
                    const errorData = await loggedInUser.json().catch(() => null);
                    setError(errorData?.message || "Failed to fetch user's data, try again later!");
                }
    
                const data = await loggedInUser.json();
                setUser(data);
            }
            catch(e) {
                setError("Something went wrong, try again later!")
            }
            finally {
                isLoading(false);
            }
        }
    
        getLoggedInUserData();
      }, [])

  return (
    <div className="flex justify-between items-center px-[5dvw] MobileTopBar">
        <div>
            <h1 className="text-[1.5rem] tracking-[10%]">S.A.I. RPG</h1>
        </div>
        <div className="flex justify-evenly items-center gap-[0.3rem]">
            <div>
                <p className="text-[16px]">{user?.credits}</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default MobileTopBar