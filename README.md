# Intranet HortSoy

Uma intranet moderna e responsiva desenvolvida para a HortSoy, seguindo as especificações do cliente com navegação suave e design baseado na identidade visual da empresa.

## 🚀 Características

### Design e Interface
- **Cores da marca**: Baseado na logo HortSoy (verde #00A651 e cinza #4A4A4A)
- **Navegação suave**: Transições e animações elegantes
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Logo preservada**: Mantém a identidade visual original da HortSoy

### Funcionalidades Implementadas

#### 🔐 Página de Login
- Design elegante e moderno
- Validação de campos
- Integração com sistema de autenticação

#### 🏠 Home (Dashboard)
- **Avisos importantes** com sistema de prioridades
- **Card de Aniversariantes** do mês atual
- **Acesso rápido aos sistemas** mais utilizados
- **Estatísticas em tempo real** (colaboradores online, vendas, posts)

#### 📱 Timeline
- **Feed interativo** para postagens das filiais
- **Sistema de curtidas e comentários**
- **Categorização por tipo** (aniversário, treinamento, evento, trabalho)
- **Área para criar novos posts** com upload de mídia
- **Filtros por filial e categoria**

#### 💻 Sistemas
- **8 sistemas integrados**:
  - SIAGRI (Sistema de Gestão Agrícola)
  - Power BI (Relatórios e Dashboards)
  - PayTrack (Controle de Pagamentos)
  - Outlook (E-mail Corporativo)
  - EPAYS Portal RH
  - SharePoint (Colaboração)
  - LinkedIn HortSoy
  - Site HortSoy (https://hortsoy.com.br/)
- **Filtros por categoria**
- **Estatísticas de uso**
- **Links diretos para cada sistema**

#### 🏢 Filiais
- **16 filiais em Minas Gerais**:
  - Araxá, Bambuí, Campos Altos, Carmo do Rio Claro
  - Conceição das Lagoas, Coromandel, Ibiá, Iraí de Minas
  - Passos, Patos de Minas, Patrocínio, Piumhi
  - Sacramento, Santa Juliana, São Gotardo, Uberaba
- **Organização por região** (4 regiões)
- **Informações completas**: endereço, telefone, e-mail, gerente
- **Estatísticas por filial**: número de colaboradores
- **Funcionalidades**: ligar e localizar

#### 🎓 Treinamentos
- **8 categorias de treinamento**:
  - Segurança, Vendas, Sistemas, Atendimento
  - Gestão, Compliance, Inovação, Liderança
- **Níveis**: Obrigatório, Básico, Intermediário, Avançado
- **Links diretos para OneDrive** da HortSoy
- **Informações detalhadas**: duração, participantes, instrutor
- **Filtros por categoria e nível**

## 🛠 Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **React Router DOM** - Roteamento
- **Framer Motion** - Animações

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Comandos

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 Paleta de Cores

```css
/* Cores principais HortSoy */
--hortsoy-green: #00A651;
--hortsoy-dark-gray: #4A4A4A;
--hortsoy-light-gray: #F5F5F5;

/* Cores do sistema */
--primary: oklch(0.65 0.18 142); /* Verde HortSoy */
--accent: oklch(0.65 0.18 142);  /* Verde HortSoy */
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- **Desktop** (1920px+)
- **Tablet** (768px - 1919px)
- **Mobile** (320px - 767px)

## 🔧 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── ui/         # Componentes de interface (shadcn/ui)
│   ├── Header.jsx  # Cabeçalho da aplicação
│   └── Sidebar.jsx # Menu lateral
├── pages/          # Páginas da aplicação
│   ├── Home.jsx    # Dashboard principal
│   ├── Timeline.jsx # Feed de postagens
│   ├── Sistemas.jsx # Lista de sistemas
│   ├── Filiais.jsx  # Informações das filiais
│   ├── Treinamentos.jsx # Centro de treinamentos
│   └── Login.jsx   # Página de autenticação
├── App.jsx         # Componente principal
├── App.css         # Estilos globais
└── main.jsx        # Ponto de entrada
```

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Build da aplicação**:
   ```bash
   npm run build
   ```

2. **Deploy do diretório `dist/`** para seu servidor web

3. **Configurar servidor** para servir `index.html` para todas as rotas (SPA)

## 📋 Checklist de Funcionalidades

- ✅ Página de login elegante
- ✅ Dashboard com avisos e cards
- ✅ Timeline interativa
- ✅ Sistemas integrados (8 sistemas)
- ✅ Filiais organizadas (16 filiais)
- ✅ Treinamentos com OneDrive
- ✅ Navegação responsiva
- ✅ Cores da marca HortSoy
- ✅ Logo preservada
- ✅ Animações suaves
- ✅ Design moderno e profissional

## 👥 Suporte

Para suporte técnico ou dúvidas sobre a aplicação, entre em contato com a equipe de desenvolvimento.

---

© 2025 HortSoy. Todos os direitos reservados.

