import React from 'react'
import { Search, Username } from '../../components'
import './header.css'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <Search/>
      <Username/>
    </header>
  )
}

export default Header
