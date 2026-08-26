import DashboardNav from "../components/DashboardNav"
import MobileNav from "../components/MobileNav"
import MobileTopBar from "../components/MobileTopBar"
import ProfileInfo from "../components/ProfileInfo"

const Profile = () => {
  return (
    <main className="flex flex-col md:flex-row items-center pb-[110px] md:pb-0">
      <div className="flex flex-col items-center w-full md:hidden">
        <MobileTopBar />
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <DashboardNav />
      </div>
      <ProfileInfo />
    </main>
  )
}

export default Profile