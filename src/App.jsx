import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Sistemas from './pages/Sistemas'
import Filiais from './pages/Filiais'
import Treinamentos from './pages/Treinamentos'
import Login from './pages/Login'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onLogout={() => setIsAuthenticated(false)}
          />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/sistemas" element={<Sistemas />} />
              <Route path="/filiais" element={<Filiais />} />
              <Route path="/treinamentos" element={<Treinamentos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

