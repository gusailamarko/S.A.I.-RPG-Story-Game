import type { SettingCardDropdownProps } from "../types"
import Button from "./Button"

const SettingCardDropdown = ({variant}: SettingCardDropdownProps) => (
    <>
        {variant === "Change Displayname" && (
            <form className="flex flex-col items-center justify-center p-[1rem] h-full">
                <div className="flex flex-col items-start FormElement">
                    <label htmlFor="updatedDisplayname">Displayname:</label>
                    <input type="text" name="updatedDisplayname" id="updatedDisplayname" defaultValue="Current Displayname" />
                </div>
                <div className="mt-[2rem]">
                    <Button type="submit" usage="MainActionBtn" label="SAVE" />
                </div>
            </form>
        )}
        {variant === "Change Email Address" && (
            <form className="flex flex-col items-center justify-center p-[1rem] h-full">
                <div className="flex flex-col items-start FormElement">
                    <label htmlFor="updatedEmail">Email:</label>
                    <input type="email" name="updatedEmail" id="updatedEmail" defaultValue="Current Email" />
                </div>
                <div className="mt-[2rem]">
                    <Button type="submit" usage="MainActionBtn" label="SAVE" />
                </div>
            </form>
        )}
        {variant === "Change Password" && (
            <form className="flex flex-col items-center justify-center p-[1rem] h-full">
                <div className="flex flex-col items-start FormElement">
                    <label htmlFor="updatedPw">Password:</label>
                    <input type="password" name="updatedPw" id="updatedPw" defaultValue="Current Pw" />
                </div>
                <div className="flex flex-col items-start FormElement">
                    <label htmlFor="updatedPwC">Confirm Password:</label>
                    <input type="password" name="updatedPwC" id="updatedPwC" defaultValue="Current Pw" />
                </div>
                <div className="mt-[2rem]">
                    <Button type="submit" usage="MainActionBtn" label="SAVE" />
                </div>
            </form>
        )}
    </>
)

export default SettingCardDropdown