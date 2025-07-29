import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  MessageSquare, 
  Monitor, 
  MapPin, 
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import hortsoyLogo from '../assets/hortsoy-logo.png'

const Sidebar = ({ isOpen }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/timeline', icon: MessageSquare, label: 'Timeline' },
    { path: '/sistemas', icon: Monitor, label: 'Sistemas' },
    { path: '/filiais', icon: MapPin, label: 'Filiais' },
    { path: '/treinamentos', icon: GraduationCap, label: 'Treinamentos' },
  ]

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}>
      {/* Logo */}
      <div className={`p-4 border-b border-gray-200 ${!isOpen ? 'px-2' : ''}`}>
        <div className="flex items-center justify-center">
          <img 
            src={hortsoyLogo} 
            alt="HortSoy" 
            className={`transition-all duration-300 ${isOpen ? 'h-12' : 'h-10'}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 ${isOpen ? 'p-4' : 'p-2'}`}>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center ${isOpen ? 'p-3' : 'p-2'} rounded-lg transition-all duration-200 group relative ${
                    isActive 
                      ? 'bg-[var(--hortsoy-green)] text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[var(--hortsoy-green)]'
                  }`}
                  title={!isOpen ? item.label : ''}
                >
                  <Icon className={`${isOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 transition-colors`} />
                  {isOpen && (
                    <span className="font-medium transition-all duration-200">
                      {item.label}
                    </span>
                  )}
                  {!isOpen && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={`${isOpen ? 'p-4' : 'p-2'} border-t border-gray-200`}>
        <div className={`text-xs text-gray-500 ${isOpen ? 'text-center' : 'hidden'}`}>
          © 2025 HortSoy
        </div>
      </div>
    </div>
  )
}

export default Sidebar


