import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavBar() {
  return (
    <div>
        <NavbarItem title='Melhores Classificados' param={'topMovies'}/>
        <NavbarItem title='Home' param={'Home'}/>
    </div>
  )
}
