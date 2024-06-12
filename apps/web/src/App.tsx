import { Route, Routes } from "react-router-dom"
import CheckAuthentication from "./components/CheckAuthentication"
import { routes } from "./routes"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />

        <Route path="/" element={<CheckAuthentication />}>
          <Route path={routes.home} element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
