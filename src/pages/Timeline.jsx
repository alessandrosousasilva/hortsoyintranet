import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Image as ImageIcon, 
  Send,
  MapPin,
  Calendar,
  Users,
  Camera
} from 'lucide-react'

const Timeline = () => {
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      autor: "Maria Silva",
      cargo: "Coordenadora RH",
      filial: "Patos de Minas",
      data: "29/07/2025 14:30",
      conteudo: "🎉 Parabéns a todos os aniversariantes de julho! Foi um mês especial com muitas comemorações. Que agosto venha cheio de alegrias e conquistas para toda a equipe HortSoy!",
      imagem: null,
      curtidas: 23,
      comentarios: 5,
      curtido: false,
      tipo: "aniversario"
    },
    {
      id: 2,
      autor: "João Santos",
      cargo: "Gerente Comercial",
      filial: "Araxá",
      data: "28/07/2025 16:45",
      conteudo: "Excelente treinamento sobre técnicas de vendas realizado hoje na filial de Araxá! A equipe está motivada e pronta para superar as metas de agosto. 💪",
      imagem: "/api/placeholder/400/200",
      curtidas: 31,
      comentarios: 8,
      curtido: true,
      tipo: "treinamento"
    },
    {
      id: 3,
      autor: "Ana Costa",
      cargo: "Supervisora Técnica",
      filial: "Uberaba",
      data: "27/07/2025 09:15",
      conteudo: "Festa julina da filial Uberaba foi um sucesso! Obrigada a todos que participaram e tornaram esse momento especial. A união da nossa equipe é o que nos faz mais fortes! 🌽🎪",
      imagem: "/api/placeholder/400/250",
      curtidas: 45,
      comentarios: 12,
      curtido: false,
      tipo: "evento"
    },
    {
      id: 4,
      autor: "Carlos Oliveira",
      cargo: "Técnico Agrícola",
      filial: "Patrocínio",
      data: "26/07/2025 11:20",
      conteudo: "Visita técnica aos produtores da região foi muito produtiva. Identificamos novas oportunidades de negócio e fortalecemos nossos relacionamentos. #HortSoyNosCampos",
      imagem: null,
      curtidas: 18,
      comentarios: 3,
      curtido: true,
      tipo: "trabalho"
    }
  ])

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            curtido: !post.curtido,
            curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1
          }
        : post
    ))
  }

  const handleNewPost = () => {
    if (newPost.trim()) {
      const novoPost = {
        id: posts.length + 1,
        autor: "Usuário Atual",
        cargo: "Seu Cargo",
        filial: "Sua Filial",
        data: new Date().toLocaleString('pt-BR'),
        conteudo: newPost,
        imagem: null,
        curtidas: 0,
        comentarios: 0,
        curtido: false,
        tipo: "geral"
      }
      setPosts([novoPost, ...posts])
      setNewPost('')
    }
  }

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case 'aniversario': return 'bg-pink-100 text-pink-800'
      case 'treinamento': return 'bg-blue-100 text-blue-800'
      case 'evento': return 'bg-purple-100 text-purple-800'
      case 'trabalho': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTipoLabel = (tipo) => {
    switch (tipo) {
      case 'aniversario': return 'Aniversário'
      case 'treinamento': return 'Treinamento'
      case 'evento': return 'Evento'
      case 'trabalho': return 'Trabalho'
      default: return 'Geral'
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Timeline</h1>
        <p className="text-gray-600 mt-2">Compartilhe momentos e interaja com a equipe HortSoy</p>
      </div>

      {/* Nova Postagem */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Compartilhar</CardTitle>
          <CardDescription>
            O que está acontecendo na sua filial?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Compartilhe novidades, treinamentos, eventos ou conquistas da sua filial..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Foto
                </Button>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Vídeo
                </Button>
              </div>
              <Button 
                onClick={handleNewPost}
                disabled={!newPost.trim()}
                className="bg-[var(--hortsoy-green)] hover:bg-green-600"
              >
                <Send className="h-4 w-4 mr-2" />
                Publicar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed de Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[var(--hortsoy-green)] rounded-full flex items-center justify-center text-white font-semibold">
                    {post.autor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.autor}</h3>
                    <p className="text-sm text-gray-600">{post.cargo}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.filial}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.data}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getTipoColor(post.tipo)}>
                  {getTipoLabel(post.tipo)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-800 mb-4 leading-relaxed">{post.conteudo}</p>
              
              {post.imagem && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={post.imagem} 
                    alt="Post" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Ações */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`${post.curtido ? 'text-red-600' : 'text-gray-600'} hover:text-red-600`}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${post.curtido ? 'fill-current' : ''}`} />
                    {post.curtidas}
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {post.comentarios}
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full max-w-md">
          Carregar mais posts
        </Button>
      </div>
    </div>
  )
}

export default Timeline

