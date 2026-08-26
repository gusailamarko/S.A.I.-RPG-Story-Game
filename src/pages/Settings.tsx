import Button from "../components/Button"
import DashboardNav from "../components/DashboardNav"
import MobileNav from "../components/MobileNav"
import MobileTopBar from "../components/MobileTopBar"
import SettingCard from "../components/SettingCard"
import { settingLabels } from "../const/const"

const Settings = () => {
  return (
    <main className="flex flex-col md:flex-row items-center pb-[110px] md:pb-0 gap-[2rem] md:gap-[0]">
      <div className="flex flex-col items-center w-full md:hidden">
        <MobileTopBar />
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DashboardNav />
      </div>
      <div className="flex flex-col items-center justify-center gap-[1rem] md:h-[100dvh] overflow-y-auto w-full">
        {settingLabels.map((settingLabel, idx) => (
            <SettingCard key={idx} label={settingLabel}/>
        ))}
        <div className="md:my-[1rem]">
          <Button type="button" usage="DeleteBtn" label="Delete Account"/>
        </div>
      </div>
    </main>
  )
}

export default Settings