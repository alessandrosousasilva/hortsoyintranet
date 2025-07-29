import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Users,
  Building,
  Navigation,
  Search,
  Filter
} from 'lucide-react'

const Filiais = () => {
  const filiais = [
    {
      id: 1,
      nome: "Araxá",
      endereco: "AV. JOSE ANANIAS AGUIAR, 5835 - BOA VISTA, ARAXA - MG, 38180-130",
      gerente: "João Santos",
      colaboradores: 18,
      status: "Ativa",
      regiao: "Triângulo Mineiro"
    },
    {
      id: 2,
      nome: "Bambuí",
      endereco: "RUA ALZIRA TORRES, 681 - NACOES, BAMBUI - MG, 38900000",
      gerente: "Maria Oliveira",
      colaboradores: 12,
      status: "Ativa",
      regiao: "Centro-Oeste"
    },
    {
      id: 3,
      nome: "Campos Altos",
      endereco: "RUA JOAO SOARES DE SOUZA, 95 - CENTRO, CAMPOS ALTOS - MG, 38970-000",
      gerente: "Pedro Silva",
      colaboradores: 8,
      status: "Ativa",
      regiao: "Sul de Minas"
    },
    {
      id: 4,
      nome: "Carmo do Rio Claro",
      endereco: "RUA PADRE PENTEADO, 15 - SANTO ANTONIO, CARMO DO RIO CLARO - MG, 37150-000",
      gerente: "Ana Costa",
      colaboradores: 10,
      status: "Ativa",
      regiao: "Sul de Minas"
    },
    {
      id: 5,
      nome: "Conceição das Lagoas",
      endereco: "AV. JOAO MARQUES DE OLIVEIRA, 527 - 537 - JARDIMM AMERICA , CONCEIÇÃO DAS ALAGOAS - MG, 38120-000",
      gerente: "Carlos Mendes",
      colaboradores: 6,
      status: "Ativa",
      regiao: "Sul de Minas"
    },
    {
      id: 6,
      nome: "Coromandel",
      endereco: "AV. GOVERNADOR ISRAEL PINHEIRO, 691 - CENTRO, COROMANDEL - MG, 38550-000",
      gerente: "Lucia Santos",
      colaboradores: 15,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 7,
      nome: "Ibiá",
      endereco: "AV. BARTOLOMEU RIBEIRO DE PAIVA, 934 - CENTRO, IBIÁ - MG, 38950-000",
      gerente: "Roberto Lima",
      colaboradores: 9,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 8,
      nome: "Iraí de Minas",
      endereco: "AV.SETE DE SETEMBRO, 600 - CENTRO, IRAI DE MINAS  - MG, 38510000",
      gerente: "Fernanda Rocha",
      colaboradores: 7,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 9,
      nome: "Passos",
      endereco: "ROD. MG - 050, 628, VILA RICA - PASSOS DE MINAS - MG, 37901-300",
      gerente: "Marcos Pereira",
      colaboradores: 22,
      status: "Ativa",
      regiao: "Sul de Minas"
    },
    {
      id: 10,
      nome: "Patos de Minas",
      endereco: "AV. PRESIDENTE TANCREDO NEVES, 540 - CIDADE NOVA, PATOS DE MINAS - MG, 38706-400",
      gerente: "Sandra Alves",
      colaboradores: 28,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 11,
      nome: "Patrocínio",
      endereco: "AV. FARIA PEREIRA, 3230 - SÃO CRISTOVÃO, PATROCINIO - MG, 38742-218",
      gerente: "Eduardo Martins",
      colaboradores: 19,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 12,
      nome: "Piumhi",
      endereco: "RUA PADRE ABEL, 1393 - PINDAIBAS, PIUMHI - MG, 37925-000",
      gerente: "Juliana Ferreira",
      colaboradores: 11,
      status: "Ativa",
      regiao: "Centro-Oeste"
    },
    {
      id: 13,
      nome: "Sacramento",
      endereco: "RUA MARIO DE SANTI, 280 - JARDIM DAS ACACIAS, SACRAMENTO - MG, 38190-000",
      gerente: "Antonio Silva",
      colaboradores: 13,
      status: "Ativa",
      regiao: "Triângulo Mineiro"
    },
    {
      id: 14,
      nome: "Santa Juliana",
      endereco: "AV. JOAQUIM HONORIO DA SILVA, 20 - PALMEIRAS, SANTA JULIANA - MG, 38175-000",
      gerente: "Cristina Lopes",
      colaboradores: 14,
      status: "Ativa",
      regiao: "Triângulo Mineiro"
    },
    {
      id: 15,
      nome: "São Gotardo",
      endereco: "ROD. MG 235, 590 KM 88, 25 - 38800-000",
      gerente: "Rafael Costa",
      colaboradores: 16,
      status: "Ativa",
      regiao: "Alto Paranaíba"
    },
    {
      id: 16,
      nome: "Uberaba",
      endereco: "AV. DEP. JOSE MARCUS CHEREM, 1020 - SÃO CRISTOVÃO, UBERABA - MG, 38031-070",
      gerente: "Patricia Oliveira",
      colaboradores: 25,
      status: "Ativa",
      regiao: "Triângulo Mineiro"
    }
  ]

  const regioes = [...new Set(filiais.map(f => f.regiao))]
  const totalColaboradores = filiais.reduce((total, filial) => total + filial.colaboradores, 0)

  const getRegiaoColor = (regiao) => {
    switch (regiao) {
      case 'Alto Paranaíba': return 'bg-green-100 text-green-800'
      case 'Triângulo Mineiro': return 'bg-blue-100 text-blue-800'
      case 'Sul de Minas': return 'bg-purple-100 text-purple-800'
      case 'Centro-Oeste': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Filiais</h1>
        <p className="text-gray-600 mt-2">Rede de filiais HortSoy em Minas Gerais</p>
      </div>

      {/* Stats */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[var(--hortsoy-green)]">{filiais.length}</div>
              <div className="text-sm text-gray-600">Filiais Ativas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{regioes.length}</div>
              <div className="text-sm text-gray-600">Regiões</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{totalColaboradores}</div>
              <div className="text-sm text-gray-600">Colaboradores</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filtros por Região */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filtrar por Região</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Todas as Regiões
            </Badge>
            {regioes.map((regiao) => (
              <Badge 
                key={regiao}
                className={`cursor-pointer hover:opacity-80 ${getRegiaoColor(regiao)}`}
              >
                {regiao}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grid de Filiais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filiais.map((filial) => (
          <Card key={filial.id} className="hover:shadow-lg transition-all duration-200 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[var(--hortsoy-green)]" />
                    <span>{filial.nome}</span>
                  </CardTitle>
                  <Badge className={getRegiaoColor(filial.regiao)} variant="outline">
                    {filial.regiao}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">{filial.status}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-sm">
                  <Building className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">{filial.endereco}</span>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Gerente</p>
                    <p className="text-gray-600">{filial.gerente}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-[var(--hortsoy-green)]">
                        {filial.colaboradores}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">colaboradores</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:scale-[1.02] transition-transform"
                >
                  <Navigation className="h-3 w-3 mr-1" />
                  Localizar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filiais por Região */}
      <div className="space-y-6">
        {regioes.map((regiao) => {
          const filiaisDaRegiao = filiais.filter(f => f.regiao === regiao)
          const colaboradoresDaRegiao = filiaisDaRegiao.reduce((total, filial) => total + filial.colaboradores, 0)
          
          return (
            <Card key={regiao}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[var(--hortsoy-green)]" />
                    <span>{regiao}</span>
                    <Badge variant="secondary">{filiaisDaRegiao.length} filiais</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    {colaboradoresDaRegiao} colaboradores
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filiaisDaRegiao.map((filial) => (
                    <div 
                      key={filial.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{filial.nome}</p>
                        <p className="text-sm text-gray-600">{filial.gerente}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-[var(--hortsoy-green)]">
                            {filial.colaboradores}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Filiais



