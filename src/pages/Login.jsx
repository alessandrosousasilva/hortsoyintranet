import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, User, Lock } from 'lucide-react'
import hortsoyLogo from '../assets/hortsoy-logo.png'

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de login - em produção seria uma chamada à API
    if (formData.username && formData.password) {
      onLogin()
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <img 
                src={hortsoyLogo} 
                alt="HortSoy" 
                className="h-16 w-auto"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Bem-vindo à Intranet
            </CardTitle>
            <CardDescription className="text-gray-600">
              Faça login para acessar o sistema
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 font-medium">
                  Usuário
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Digite seu usuário"
                    value={formData.username}
                    onChange={handleChange}
                    className="pl-10 h-12 border-gray-300 focus:border-[var(--hortsoy-green)] focus:ring-[var(--hortsoy-green)]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-[var(--hortsoy-green)] focus:ring-[var(--hortsoy-green)]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[var(--hortsoy-green)] hover:bg-green-600 text-white font-medium transition-all duration-200 transform hover:scale-[1.02]"
              >
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="text-sm text-[var(--hortsoy-green)] hover:text-green-600 font-medium"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 HortSoy. Todos os direitos reservados.
        </div>
      </div>
    </div>
  )
}

export default Login

