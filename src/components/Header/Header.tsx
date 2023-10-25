import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Search, Username } from '../../components'
import './header.css'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <Search />
      <Username/>
    </header>
  )
}

export default Header
