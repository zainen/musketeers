import './header.css'
import { BrowserRouter as  Route, Link } from 'react-router-dom'
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
    </>
  )
}

export default Header