import { ThemeProvider } from "next-themes";

import React from 'react'

interface Propsthems{
children:React.ReactNode
}
export default function Themes({children}:Propsthems) {
  return (
<ThemeProvider defaultTheme="system" attribute="class">
    {children}
</ThemeProvider>
  )
}
