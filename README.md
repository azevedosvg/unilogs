# UniLogs — Dashboard de Logística

Projeto acadêmico desenvolvido em React utilizando Context API para gerenciamento global de estados.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Sobre o Projeto

O UniLogs é um dashboard fictício de logística inteligente. A interface simula a tela de controle que uma empresa de entregas utilizaria para monitorar suas operações em tempo real — visualizando métricas do dia, status de entregas, motoristas em rota e eventos operacionais.

O objetivo acadêmico do projeto é demonstrar na prática o uso da **Context API nativa do React** para gerenciamento global de estados, sem o uso de bibliotecas externas.

---

## Funcionalidades

- Alternância global entre tema claro e escuro via Context API;
- Cards de métricas com indicadores de variação;
- Tabela de entregas recentes com badges de status;
- Feed de atividade operacional em tempo real;
- Sidebar de navegação com perfil do usuário;
- Data e hora atualizadas em tempo real na barra superior;
- Layout responsivo;

---

## Context API — Implementação

O gerenciamento de tema foi implementado inteiramente com recursos nativos do React, seguindo três etapas:

**1. Criação do contexto**

```jsx
// src/context/ThemeContext.jsx
const ThemeContext = createContext();
```

**2. Provider global**

O `ThemeProvider` envolve toda a aplicação no nível mais alto, em `main.jsx`, garantindo que qualquer componente da árvore tenha acesso ao estado do tema.

```jsx
// src/main.jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

**3. Hook customizado**

Em vez de expor o `useContext` diretamente, foi criado um hook `useTheme()` que encapsula o consumo do contexto e inclui validação de uso correto.

```jsx
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}
```

**Componentes que consomem o contexto**

| Componente | O que consome |
| `Topbar.jsx` | `isDark`, `toggleTheme` |
| `Sidebar.jsx` | `isDark` |
| `StatsRow.jsx` | `isDark` |
| `ActivityFeed.jsx` | `isDark` |

---

## Sistema de Temas

O tema é controlado por variáveis CSS definidas em `global.css`. Quando o usuário aciona o botão de tema, o React alterna a classe `.light` ou `.dark` na div raiz da aplicação, atualizando automaticamente todas as variáveis em cascata.

```css
.app-wrapper.light {
  --bg: #f5f8fa;
  --bg-card: #ffffff;
  --accent: #1e88e5;
}

.app-wrapper.dark {
  --bg: #1c1c1e;
  --bg-card: #2c2c2e;
  --accent: #0a84ff;
}
```

A transição suave entre os temas é feita via CSS:

```css
.app-wrapper {
  transition:
    background 0.3s,
    color 0.3s;
}
```

---

## Estrutura de Pastas

```
unilogs/
    public/
│   └── index.html
├── src/
│   ├── context/
│   │   └── ThemeContext.jsx       # createContext, ThemeProvider e useTheme
│   ├── components/
│   │   ├── Sidebar.jsx            # Menu lateral de navegação
│   │   ├── Topbar.jsx             # Barra superior com botão de tema e relógio
│   │   ├── StatsRow.jsx           # Cards de métricas operacionais
│   │   ├── RecentDeliveries.jsx   # Tabela de entregas recentes
│   │   ├── ActivityFeed.jsx       # Feed de atividade em tempo real
│   │   └── Footer.jsx             # Rodapé com informações do projeto
│   ├── styles/
│   │   ├── global.css             # Reset, variáveis de tema e layout base
│   │   ├── Sidebar.css
│   │   ├── Topbar.css
│   │   ├── StatsRow.css
│   │   ├── RecentDeliveries.css
│   │   ├── ActivityFeed.css
│   │   └── Footer.css
│   ├── App.jsx                    # Composição dos componentes
│   └── main.jsx                   # Entrada da aplicação e Provider global
├── package.json
└── vite.config.js
```

---

## Tecnologias utilizadas

| React 18: Biblioteca principal de interface;
| Vite: Servidor de desenvolvimento;
| React Icons: Biblioteca de ícones;
| Google Fonts (Inter): Fonte principal;
| CSS Variables: Sistema de temas claro/escuro;

---

## Como Rodar

**Pré-requisitos:** Node.js v18 ou superior.

```bash
# Clone o repositório
git clone https://github.com/azevedosvg/unilogs.git

# Entre na pasta do projeto
cd unilogs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador.

---

## Autores

Gabriel de Azevedo Silva e Paulo Victor Rodrigues Moraes

## Disciplina e Professor

Desenvolvimento Web Front End — UniAcademia 2026

Professor: Christien Lana Rachid
