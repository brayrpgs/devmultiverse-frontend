import { useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Theme } from "../enums/Theme"

interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
