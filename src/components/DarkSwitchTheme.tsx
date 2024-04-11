"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode,MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'


export default function DarkSwitchTheme() {
const{theme,setTheme,systemTheme}=useTheme()
const [mounted,setMounted] = useState(false);
const curretTheme =theme === 'system'? systemTheme:theme;
useEffect(() => {
  setMounted(true)
}, [])




  return (
    <div>
        {mounted && curretTheme==='dark'?
        (<MdLightMode className='w-8 h-8 border-2 rounded-md  border-blue-200 hover:bg-amber-600  hover:border-amber-400' onClick={()=>{setTheme('light')}}/>):
        (<MdDarkMode className='w-8 h-8 border-2 rounded-md  border-blue-200 hover:bg-amber-600  hover:border-amber-400' onClick={()=>{setTheme('dark')}}/>)
        }
    </div>
  )
}
