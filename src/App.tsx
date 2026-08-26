import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Auth from "./pages/Auth"
import Creation from "./pages/Creation"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/create" element={<Creation />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App