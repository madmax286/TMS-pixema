import React from 'react'
import { Search, Username } from '../../components'
import './header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Search/>
      <Username/>
    </div>
  )
}

export default Header
