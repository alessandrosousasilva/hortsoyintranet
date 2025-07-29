import { Menu, LogOut, User, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = ({ onToggleSidebar, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="text-gray-600 hover:text-[var(--hortsoy-green)] hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">
            Intranet HortSoy
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-[var(--hortsoy-green)] hover:bg-gray-100 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Usuário
              </span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-gray-600 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

