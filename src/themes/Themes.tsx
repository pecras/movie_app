import { ThemeProvider } from "next-themes";

import React from 'react'

interface Propsthems{
children:React.ReactNode
}
export default function Themes({children}:Propsthems) {
  return (
<ThemeProvider defaultTheme="system" attribute="class">
  <div className="text-gray-700 bg-white dark:text-teal-200 dark:bg-black min-h-screen select-none transition-colors duration-300" >
    
  
    {children}
    </div>
</ThemeProvider>
  )
}
