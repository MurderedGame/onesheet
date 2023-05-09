import './navBar.css'
import Logo from '../images/Logo.png'   
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            name === 'Register' ? <li></li> :
                            <li>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
                <GiHamburgerMenu/>
            </button>
        </div>
    </nav>
  )
}

export default NavBar