import { AllStories, MobileNav, MobileTopBar } from '../../components/index';

const home = () => {
  return (
    <main className="flex flex-col items-center">
      <MobileTopBar />
      <AllStories />
      <MobileNav />
    </main>
  )
}

export default home