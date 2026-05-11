import { createContext, useContext, useState } from "react";
// createContext: função que cria o contexto em sí
// useContext: hook que permite um componente consumir o contexto
// useState: hook pra guardar o estado do tema

const ThemeContext = createContext();
// Qualquer componente que acessar as informações do projecto, vai buscar aqui;

// Provider:
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
}

const value = {
  isDark,
  toggleTheme,
  theme: isDark ? "dark" : "light",
};

return (
  <ThemeContext.Provider value={value}>
    <div className={`app-wrapper ${isDark ? "dark" : "light"}`}>{children}</div>
  </ThemeContext.Provider>
);

// children: tudo que estiver dentro do provider;
// useState em false: o estado do tema é claro, por padrão;
// toggleTheme: função pra mudar o estado do tema;

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return context;
}

// function useTheme: função pra chamar nos componentes que precisam de acesso ao contexto;
