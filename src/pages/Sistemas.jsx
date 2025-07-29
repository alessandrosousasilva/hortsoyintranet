import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ExternalLink,
  Monitor,
  BarChart3,
  CreditCard,
  Mail,
  Users,
  Share2,
  Linkedin,
  Globe,
  Search
} from 'lucide-react'

const Sistemas = () => {
  const sistemas = [
    {
      id: 1,
      nome: "SIAGRI",
      descricao: "Sistema de Gestão Agrícola completo para controle de produção, estoque e vendas",
      categoria: "Gestão",
      icon: "🌱",
      cor: "bg-green-100 text-green-800 border-green-200",
      url: "#",
      status: "Ativo",
      usuarios: "245 usuários"
    },
    {
      id: 2,
      nome: "Power BI",
      descricao: "Plataforma de Business Intelligence para relatórios e dashboards interativos",
      categoria: "Analytics",
      icon: "📊",
      cor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      url: "#",
      status: "Ativo",
      usuarios: "89 usuários"
    },
    {
      id: 3,
      nome: "PayTrack",
      descricao: "Sistema de controle de pagamentos e gestão financeira",
      categoria: "Financeiro",
      icon: "💰",
      cor: "bg-blue-100 text-blue-800 border-blue-200",
      url: "#",
      status: "Ativo",
      usuarios: "156 usuários"
    },
    {
      id: 4,
      nome: "Outlook",
      descricao: "E-mail corporativo e calendário integrado da Microsoft",
      categoria: "Comunicação",
      icon: "📧",
      cor: "bg-purple-100 text-purple-800 border-purple-200",
      url: "#",
      status: "Ativo",
      usuarios: "320 usuários"
    },
    {
      id: 5,
      nome: "EPAYS Portal RH",
      descricao: "Portal de recursos humanos para gestão de colaboradores e benefícios",
      categoria: "RH",
      icon: "👥",
      cor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      url: "#",
      status: "Ativo",
      usuarios: "298 usuários"
    },
    {
      id: 6,
      nome: "SharePoint",
      descricao: "Plataforma de colaboração e compartilhamento de documentos",
      categoria: "Colaboração",
      icon: "📁",
      cor: "bg-gray-100 text-gray-800 border-gray-200",
      url: "#",
      status: "Ativo",
      usuarios: "267 usuários"
    },
    {
      id: 7,
      nome: "LinkedIn HortSoy",
      descricao: "Perfil corporativo da HortSoy na rede social profissional",
      categoria: "Marketing",
      icon: "💼",
      cor: "bg-blue-100 text-blue-800 border-blue-200",
      url: "#",
      status: "Ativo",
      usuarios: "12 administradores"
    },
    {
      id: 8,
      nome: "Site HortSoy",
      descricao: "Website institucional da empresa",
      categoria: "Institucional",
      icon: "🌐",
      cor: "bg-green-100 text-green-800 border-green-200",
      url: "https://hortsoy.com.br/",
      status: "Ativo",
      usuarios: "Público"
    }
  ]

  const categorias = [...new Set(sistemas.map(s => s.categoria))]

  const getIconComponent = (categoria) => {
    switch (categoria) {
      case 'Gestão': return Monitor
      case 'Analytics': return BarChart3
      case 'Financeiro': return CreditCard
      case 'Comunicação': return Mail
      case 'RH': return Users
      case 'Colaboração': return Share2
      case 'Marketing': return Linkedin
      case 'Institucional': return Globe
      default: return Monitor
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Sistemas</h1>
        <p className="text-gray-600 mt-2">Acesse todos os sistemas da HortSoy</p>
      </div>

      {/* Stats */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[var(--hortsoy-green)]">{sistemas.length}</div>
              <div className="text-sm text-gray-600">Sistemas Ativos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">1.387</div>
              <div className="text-sm text-gray-600">Total de Usuários</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Grid de Sistemas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sistemas.map((sistema) => {
          const IconComponent = getIconComponent(sistema.categoria)
          
          return (
            <Card key={sistema.id} className="hover:shadow-lg transition-all duration-200 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[var(--hortsoy-green)] bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{sistema.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{sistema.nome}</CardTitle>
                      <Badge className={sistema.cor} variant="outline">
                        {sistema.categoria}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">{sistema.status}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  {sistema.descricao}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{sistema.usuarios}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-[var(--hortsoy-green)] hover:bg-green-600 group-hover:scale-[1.02] transition-transform"
                  onClick={() => {
                    if (sistema.url !== "#") {
                      window.open(sistema.url, '_blank')
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Acessar Sistema
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Sistemas

