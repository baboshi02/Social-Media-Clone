import React from 'react'
import { NavBarButton } from './regButton'

import { signOut } from "../utils/signOut";

export const NavBar = () => {
  return (
    <div className='h-12 bg-slate-500 flex justify-end p-2'>
        
        <NavBarButton onClick={signOut}>
          Sign Out
        </NavBarButton>
    </div>
  )
}
