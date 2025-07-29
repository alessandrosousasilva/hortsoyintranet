import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  ExternalLink, 
  Clock, 
  Users, 
  Download,
  Play,
  BookOpen,
  Award,
  Calendar,
  Search,
  Filter
} from 'lucide-react'

const Treinamentos = () => {
  const treinamentos = [
    {
      id: 1,
      titulo: "Segurança no Trabalho Rural",
      descricao: "Normas e procedimentos de segurança para atividades agrícolas",
      categoria: "Segurança",
      duracao: "2h 30min",
      nivel: "Obrigatório",
      participantes: 245,
      dataAtualizacao: "15/07/2025",
      instrutor: "João Silva - Eng. Segurança",
      formato: "Vídeo + PDF",
      status: "Disponível",
      link: "#onedrive-link-1"
    },
    {
      id: 2,
      titulo: "Técnicas de Vendas Consultivas",
      descricao: "Metodologias modernas para vendas no agronegócio",
      categoria: "Vendas",
      duracao: "3h 15min",
      nivel: "Intermediário",
      participantes: 89,
      dataAtualizacao: "22/07/2025",
      instrutor: "Maria Santos - Gerente Comercial",
      formato: "Vídeo + Exercícios",
      status: "Disponível",
      link: "#onedrive-link-2"
    },
    {
      id: 3,
      titulo: "Uso do Sistema SIAGRI",
      descricao: "Treinamento completo para utilização do sistema de gestão",
      categoria: "Sistemas",
      duracao: "4h 00min",
      nivel: "Básico",
      participantes: 156,
      dataAtualizacao: "10/07/2025",
      instrutor: "Carlos Tech - Analista de Sistemas",
      formato: "Vídeo + Prática",
      status: "Disponível",
      link: "#onedrive-link-3"
    },
    {
      id: 4,
      titulo: "Atendimento ao Cliente",
      descricao: "Excelência no atendimento e relacionamento com produtores",
      categoria: "Atendimento",
      duracao: "2h 45min",
      nivel: "Básico",
      participantes: 198,
      dataAtualizacao: "05/07/2025",
      instrutor: "Ana Costa - Supervisora",
      formato: "Vídeo + Cases",
      status: "Disponível",
      link: "#onedrive-link-4"
    },
    {
      id: 5,
      titulo: "Gestão de Estoque",
      descricao: "Controle e otimização de estoque de produtos agrícolas",
      categoria: "Gestão",
      duracao: "3h 30min",
      nivel: "Intermediário",
      participantes: 67,
      dataAtualizacao: "28/06/2025",
      instrutor: "Roberto Lima - Coordenador",
      formato: "Vídeo + Planilhas",
      status: "Disponível",
      link: "#onedrive-link-5"
    },
    {
      id: 6,
      titulo: "Compliance e Ética Empresarial",
      descricao: "Princípios éticos e conformidade regulatória",
      categoria: "Compliance",
      duracao: "1h 45min",
      nivel: "Obrigatório",
      participantes: 312,
      dataAtualizacao: "20/06/2025",
      instrutor: "Dra. Lucia Direito - Jurídico",
      formato: "Vídeo + Quiz",
      status: "Disponível",
      link: "#onedrive-link-6"
    },
    {
      id: 7,
      titulo: "Inovações no Agronegócio",
      descricao: "Tendências e tecnologias emergentes no setor",
      categoria: "Inovação",
      duracao: "2h 15min",
      nivel: "Avançado",
      participantes: 43,
      dataAtualizacao: "12/06/2025",
      instrutor: "Dr. Pedro Agro - Pesquisador",
      formato: "Webinar + Artigos",
      status: "Disponível",
      link: "#onedrive-link-7"
    },
    {
      id: 8,
      titulo: "Liderança e Gestão de Equipes",
      descricao: "Desenvolvimento de habilidades de liderança",
      categoria: "Liderança",
      duracao: "5h 00min",
      nivel: "Avançado",
      participantes: 28,
      dataAtualizacao: "01/06/2025",
      instrutor: "Marcos Leader - Coach",
      formato: "Curso + Dinâmicas",
      status: "Disponível",
      link: "#onedrive-link-8"
    }
  ]

  const categorias = [...new Set(treinamentos.map(t => t.categoria))]
  const totalParticipantes = treinamentos.reduce((total, treinamento) => total + treinamento.participantes, 0)

  const getCategoriaColor = (categoria) => {
    switch (categoria) {
      case 'Segurança': return 'bg-red-100 text-red-800'
      case 'Vendas': return 'bg-green-100 text-green-800'
      case 'Sistemas': return 'bg-blue-100 text-blue-800'
      case 'Atendimento': return 'bg-purple-100 text-purple-800'
      case 'Gestão': return 'bg-yellow-100 text-yellow-800'
      case 'Compliance': return 'bg-gray-100 text-gray-800'
      case 'Inovação': return 'bg-orange-100 text-orange-800'
      case 'Liderança': return 'bg-indigo-100 text-indigo-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case 'Obrigatório': return 'bg-red-100 text-red-800 border-red-200'
      case 'Básico': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Avançado': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Treinamentos</h1>
        <p className="text-gray-600 mt-2">Centro de desenvolvimento e capacitação HortSoy</p>
      </div>



      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filtrar Treinamentos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Por Categoria:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                  Todos
                </Badge>
                {categorias.map((categoria) => (
                  <Badge 
                    key={categoria}
                    className={`cursor-pointer hover:opacity-80 ${getCategoriaColor(categoria)}`}
                  >
                    {categoria}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Por Nível:</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-100 text-red-800 cursor-pointer hover:opacity-80">
                  Obrigatório
                </Badge>
                <Badge className="bg-green-100 text-green-800 cursor-pointer hover:opacity-80">
                  Básico
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 cursor-pointer hover:opacity-80">
                  Intermediário
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 cursor-pointer hover:opacity-80">
                  Avançado
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid de Treinamentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treinamentos.map((treinamento) => (
          <Card key={treinamento.id} className="hover:shadow-lg transition-all duration-200 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getCategoriaColor(treinamento.categoria)}>
                  {treinamento.categoria}
                </Badge>
                <Badge className={getNivelColor(treinamento.nivel)} variant="outline">
                  {treinamento.nivel}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{treinamento.titulo}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {treinamento.descricao}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{treinamento.duracao}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{treinamento.participantes} participantes</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{treinamento.formato}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Atualizado em {treinamento.dataAtualizacao}</span>
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Instrutor:</span> {treinamento.instrutor}
                </p>
              </div>

              <Button 
                className="w-full bg-[var(--hortsoy-green)] hover:bg-green-600 group-hover:scale-[1.02] transition-transform"
                onClick={() => {
                  // Em produção, abriria o link do OneDrive
                  console.log('Abrindo treinamento:', treinamento.link)
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar no OneDrive
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Treinamentos por Categoria */}
      <div className="space-y-6">
        {categorias.map((categoria) => {
          const treinamentosDaCategoria = treinamentos.filter(t => t.categoria === categoria)
          
          return (
            <Card key={categoria}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-[var(--hortsoy-green)]" />
                  <span>{categoria}</span>
                  <Badge variant="secondary">{treinamentosDaCategoria.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treinamentosDaCategoria.map((treinamento) => (
                    <div 
                      key={treinamento.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{treinamento.titulo}</p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{treinamento.duracao}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{treinamento.participantes}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getNivelColor(treinamento.nivel)} variant="outline">
                          {treinamento.nivel}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Acesso Rápido ao OneDrive */}
      <Card className="border-[var(--hortsoy-green)] border-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5 text-[var(--hortsoy-green)]" />
            <span>Acesso Direto ao OneDrive</span>
          </CardTitle>
          <CardDescription>
            Acesse todos os materiais de treinamento diretamente na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Todos os treinamentos estão organizados por categoria no OneDrive da HortSoy
              </p>
              <p className="text-xs text-gray-500">
                Você precisa estar logado com sua conta corporativa
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-[var(--hortsoy-green)] hover:bg-green-600"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Abrir OneDrive
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Treinamentos

