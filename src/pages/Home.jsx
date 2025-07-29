import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Users,
  Monitor,
  Bell,
  Gift,
  ExternalLink,
  TrendingUp,
  MessageSquare
} from 'lucide-react'

const Home = () => {
  const avisos = [
    {
      id: 1,
      titulo: "Reunião Geral - Resultados Q4",
      descricao: "Apresentação dos resultados do último trimestre e metas para 2025",
      data: "30/07/2025",
      prioridade: "alta",
      autor: "Diretoria"
    },
    {
      id: 2,
      titulo: "Novo Sistema de Ponto Eletrônico",
      descricao: "A partir de 01/08 será implementado o novo sistema de controle de ponto",
      data: "28/07/2025",
      prioridade: "media",
      autor: "RH"
    },
    {
      id: 3,
      titulo: "Treinamento de Segurança",
      descricao: "Treinamento obrigatório sobre normas de segurança no trabalho",
      data: "25/07/2025",
      prioridade: "alta",
      autor: "Segurança do Trabalho"
    }
  ]

  const aniversariantes = [
    { nome: "Maria Silva", cargo: "Analista Financeiro", data: "30/07", filial: "Patos de Minas" },
    { nome: "João Santos", cargo: "Vendedor", data: "31/07", filial: "Araxá" },
    { nome: "Ana Costa", cargo: "Coordenadora", data: "02/08", filial: "Uberaba" },
    { nome: "Carlos Oliveira", cargo: "Técnico Agrícola", data: "05/08", filial: "Patrocínio" }
  ]

  const sistemasRapidos = [
    { nome: "SIAGRI", descricao: "Sistema de Gestão Agrícola", icon: "🌱", cor: "bg-green-100 text-green-800" },
    { nome: "Power BI", descricao: "Relatórios e Dashboards", icon: "📊", cor: "bg-yellow-100 text-yellow-800" },
    { nome: "PayTrack", descricao: "Controle de Pagamentos", icon: "💰", cor: "bg-blue-100 text-blue-800" },
    { nome: "Outlook", descricao: "E-mail Corporativo", icon: "📧", cor: "bg-purple-100 text-purple-800" }
  ]

  const getPrioridadeColor = (prioridade) => {
    switch (prioridade) {
      case 'alta': return 'bg-red-100 text-red-800 border-red-200'
      case 'media': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'baixa': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo à Intranet HortSoy</h1>

        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Hoje</p>
            <p className="font-semibold text-gray-900">
              {new Date().toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Avisos */}
      <Card className="border-l-4 border-l-[var(--hortsoy-green)]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-[var(--hortsoy-green)]" />
            <span>Avisos Importantes</span>
          </CardTitle>
          <CardDescription>
            Últimas comunicações e informações relevantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {avisos.map((aviso) => (
              <div key={aviso.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{aviso.titulo}</h3>
                      <Badge className={getPrioridadeColor(aviso.prioridade)}>
                        {aviso.prioridade}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{aviso.descricao}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{aviso.data}</span>
                      </span>
                      <span>Por: {aviso.autor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aniversariantes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Gift className="h-5 w-5 text-[var(--hortsoy-green)]" />
              <span>Aniversariantes</span>
            </CardTitle>
            <CardDescription>
              Colaboradores que fazem aniversário esta semana
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {aniversariantes.map((pessoa, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-10 h-10 bg-[var(--hortsoy-green)] rounded-full flex items-center justify-center text-white font-semibold">
                    {pessoa.nome.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{pessoa.nome}</p>
                    <p className="text-sm text-gray-600">{pessoa.cargo} - {pessoa.filial}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[var(--hortsoy-green)]">{pessoa.data}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Ver todos os aniversariantes
            </Button>
          </CardContent>
        </Card>

        {/* Sistemas Rápidos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="h-5 w-5 text-[var(--hortsoy-green)]" />
              <span>Acesso Rápido</span>
            </CardTitle>
            <CardDescription>
              Sistemas mais utilizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {sistemasRapidos.map((sistema, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50"
                >
                  <span className="text-2xl">{sistema.icon}</span>
                  <div className="text-center">
                    <p className="font-medium text-sm">{sistema.nome}</p>
                    <p className="text-xs text-gray-500">{sistema.descricao}</p>
                  </div>
                </Button>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver todos os sistemas
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home



