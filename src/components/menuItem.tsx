import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
interface PropsMenuItem{
    title:string, address:string,Icons:IconType
}


export default function MenuItem({title,address,Icons}:PropsMenuItem) {
  return (
    <Link href={address} title={title}  className='hover:bg-amber-600 md:m-10 m-4'>
        <Icons className='md:m-5 m-2'/>
    </Link>
  )
}
