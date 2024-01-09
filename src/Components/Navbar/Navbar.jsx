import './Navbar.css'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineMeh } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className="navbar">
        <Link to='' className='navbar-link'><AiFillHome className='link-icon' /></Link>
        <Link to='' className='navbar-link'><AiFillStar className='link-icon' /></Link>
        <Link to='' className='navbar-link'><AiOutlineMeh className='link-icon' /></Link>
      </ul>
    </div>
  )
}

export default Navbar
