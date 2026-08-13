import MobileNav from "../../components/MobileNav"
import MobileTopBar from "../../components/MobileTopBar"
import ProfileInfo from "../../components/ProfileInfo"

const profile = () => {
  return (
    <main className="flex flex-col items-center min-h-dvh pb-[110px]">
        <MobileNav />
        <MobileTopBar />
        <ProfileInfo />
    </main>
  )
}

export default profile