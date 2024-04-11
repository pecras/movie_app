"use client"


import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface PropsNavbarItem{
    param:any;
    title:string
}

export default function NavbarItem({title,param}:PropsNavbarItem) {
    const searchParams =useSearchParams();
    const genre=searchParams.get('genre')
  return (
    <div>
        <Link
        className={`hover:text-amber-700 font-semibold ${genre ===param ? 'underline underline-offset-8 decoration-4 decorantion-amber-500 rounded-lg':''}`}
         href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
