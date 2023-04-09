import Mode from '../../component/Mode/Mode'
import './Heade.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
    <div className="container">
        <a className="header__logo" href="./index.html">
          <img src="../../../public/images/Uzbekistan-Map-Flag-With-Stroke.svg" alt="uzb-flags"width={100} height={80}/>
        </a>
        <Link className='home' to='/'>Bosh sahifa</Link>
        <Mode/>
    </div>
</header>
  )
}

export default Header