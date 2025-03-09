import { Link, NavLink } from 'react-router-dom'
import loginImg from '../images/avatar-icon.png'

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav>
        <NavLink to='/host'
          className={({ isActive }) => isActive ? 'active-link' : null}
        >
          Host
        </NavLink>
        <NavLink to='/about'
          className={({ isActive }) => isActive ? 'active-link' : null}
        >
          About
        </NavLink>
        <NavLink to='/vans'
          className={({ isActive }) => isActive ? 'active-link' : null}
        >
          Vans
        </NavLink>
        <Link to="login" className='login-link'>
          <img
            src={loginImg}
            className='login-icon'
          />
        </Link>
      </nav>
    </header>
  )
}