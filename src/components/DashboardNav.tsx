import { NavLink } from "react-router-dom"

const DashboardNav = () => {
  return (
    <nav className="flex flex-col items-start px-[2rem] py-[1rem] md:w-[30dvw] xl:w-[20dvw] h-[100dvh] w-full relative DashboardNav">
        <div>
            <h1 className="text-[2rem] mb-[1rem]">S.A.I. RPG</h1>
        </div>
        <div className="flex flex-col gap-[1rem] w-full">
            <NavLink to="/home" className={({isActive}) => `DashboardNavLink ${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
                <p>Home</p>
            </NavLink>
            <NavLink to="/create" className={({isActive}) => `DashboardNavLink ${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <p>Create</p>
            </NavLink>
            <NavLink to="/profile" className={({isActive}) => `DashboardNavLink ${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p>My Profile</p>
            </NavLink>
            <NavLink to="/settings" className={({isActive}) => `DashboardNavLink ${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
                <p>Settings</p>
            </NavLink>
            <div className="flex items-center gap-[0.5rem] absolute bottom-[2rem] left-[2rem] right-[2rem]">
                <div className="hidden lg:block DashboardProfilePfp">
                    <img src="defaultFallbacks/defaultProfilePfp.jpg" alt="User's profile picture" />
                </div>
                <div>
                    <div className="w-[120px]">
                        <p className="text-[18px] truncate">Displayname</p>
                    </div>
                    <div className="flex items-center gap-[0.3rem]">
                        <p className="text-[14px] italic">999+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
                        </svg>
                    </div>
                </div>
                <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                    </svg>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default DashboardNav