import CreateForm from "../../components/Creation/CreateForm"
import MobileNav from "../../components/MobileNav"
import MobileTopBar from "../../components/MobileTopBar"

const creation = () => {
  return (
    <main className="flex flex-col items-center pb-[110px]">
      <MobileTopBar />
      <CreateForm />
      <MobileNav />
    </main>
  )
}

export default creation