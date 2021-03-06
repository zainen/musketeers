import './header.css'
import { BrowserRouter as  Route, Link } from 'react-router-dom'
import tL from '../images/three-line.png'
<Route />
const Header: React.FC = () => {
  return (
    <>
      <div className='nav'>
        <Link className='link' onClick={e => e.stopPropagation} to="/">Home</Link>
        <Link className='link' onClick={e => e.stopPropagation} to="/contact-us">Contact Us</Link>
        <Link className='link' onClick={e => e.stopPropagation} to="/about-us">Club's Information</Link>
        <Link className='link' onClick={e => e.stopPropagation} to="/about-fencing">About Fencing</Link>
      </div>
      <div className="dropdown-nav">
        <button className='dropbtn'>
          <img className='nav-icon' src={tL} alt="Nav"/>
        </button>
          <div className="dropdown-content">
            <Link onClick={e => e.stopPropagation} to="/">Home</Link>
            <Link onClick={e => e.stopPropagation} to="/contact-us">Contact Us</Link>
            <Link onClick={e => e.stopPropagation} to="/about-us">Club's Information</Link>
            <Link onClick={e => e.stopPropagation} to="/about-fencing">About Fencing</Link>
          </div>
      </div>
    </>
  )
}

export default Header