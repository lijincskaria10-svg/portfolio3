import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import PMVikas from './pages/PMVikas'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header>
          <h1>Lijin</h1>
          <nav>
            <NavLink to="/" end>
              Personal Info
            </NavLink>
            <NavLink to="/pm-vikas">PM-VIKAS</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pm-vikas" element={<PMVikas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
