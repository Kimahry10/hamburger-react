import React, { useState } from 'react'
import { HeaderStyle, Hamburger } from './style'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const hamburgerToggle = () => setIsOpen(!isOpen);

  return (
    <HeaderStyle>
      <div>logo here</div>

      <Hamburger onClick={hamburgerToggle}>
        <div className={isOpen ? 'menu-btn open' : 'menu-btn'}>
          <div className="menu-btn__burger"></div>
        </div>
      </Hamburger>

          <nav className={isOpen ? 'showMenu' : ''}>
            <ul>
              <li>
                <Hamburger onClick={hamburgerToggle}>
                  <div className={isOpen ? 'menu-btn open' : 'menu-btn'}>
                    <div className="menu-btn__burger"></div>
                  </div>
                </Hamburger>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
    </HeaderStyle>
  )
}

export default Header
