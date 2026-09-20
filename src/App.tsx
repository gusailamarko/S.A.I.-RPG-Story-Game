import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Auth from "./pages/Auth"
import Creation from "./pages/Creation"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import { FeedbackProvider } from "./context/Feedback"

const App = () => {
  return (
    <FeedbackProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />}/>

            <Route element={<ProtectedRoute />}> 
              <Route path="/home" element={<HomePage />}/>
              <Route path="/create" element={<Creation />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/settings" element={<Settings />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </FeedbackProvider>
  )
}

export default App