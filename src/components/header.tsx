import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import MenuItem from './menuItem'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkSwitchTheme from './DarkSwitchTheme'



export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className=' flex gap-4'>
<MenuItem title='home' address='/' Icons={AiFillHome} />
<MenuItem title='about' address='/about' Icons={BsFillInfoCircleFill}/>

</div>
<div><DarkSwitchTheme/>
<Link href={'/'} className='flex gap-1 items-center'>
    <span className='hover:bg-amber-500'>IMDb</span>
</Link>
</div>
    </div>
  )
}
