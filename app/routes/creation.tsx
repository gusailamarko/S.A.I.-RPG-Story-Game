import CreateForm from "../../components/Creation/CreateForm"
import MobileNav from "../../components/MobileNav"
import MobileTopBar from "../../components/MobileTopBar"

const creation = () => {
  return (
    <main className="flex flex-col items-center">
      <MobileTopBar />
      <CreateForm />
      <MobileNav />
    </main>
  )
}

export default creation