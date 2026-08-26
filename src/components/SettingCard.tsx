import { useState } from "react"
import SettingCardDropdown from "./SettingCardDropdown";

const SettingCard = ({label}:SettingCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col p-[1rem] w-[90dvw] md:w-[30dvw] SettingCard">
        {!open && (
            <div className="flex justify-between items-center" onClick={() => setOpen(!open)}>
                <div>
                    <p className="text-[18px] tracking-[5%]">{label}</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
        )}
        {open && (
            <>
                <div className="flex justify-between items-center" onClick={() => setOpen(!open)}>
                    <div>
                        <p className="text-[18px] tracking-[5%]">{label}</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </div>
                </div>
                <hr className="text-white w-full my-[0.5rem]" />
                <div>
                    <SettingCardDropdown variant={label}/>
                </div>
            </>
        )}
    </div>
  )
}

export default SettingCard