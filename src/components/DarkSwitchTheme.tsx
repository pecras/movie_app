"use client"
import React, { useState } from 'react'
import { MdLightMode,MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'


export default function DarkSwitchTheme() {
const{theme,setTheme,systemTheme}=useTheme()
const curretTheme =theme === 'system'? systemTheme:theme;
  return (
    <div>
        {curretTheme==='dark'?(<MdLightMode/>):(<MdDarkMode/>)
        }
    </div>
  )
}
