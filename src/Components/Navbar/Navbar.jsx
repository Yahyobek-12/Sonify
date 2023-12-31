import './Navbar.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { BsBookmark  } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { signOut } from 'firebase/auth'
import { database } from '../../Firebase'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const history = useNavigate()  
    
  const handleClick = () => {
    signOut(database)
        .then(val => {
            history('/')
        })
  } 

  return (
    <div className='navbar'>
      <ul className="nav">
        <Link to='' className='nav-links'><AiFillHome className='nav-icon' /></Link>
        <Link to='' className='nav-links'><BsBookmark className='nav-icon' /></Link>
        <Link to='' className='nav-links'><CiStar className='nav-icon' /></Link>
        <Link to='' className='nav-links'><BiCategory className='nav-icon' /></Link>
        <Link to='' className='nav-links' onClick={handleClick}><IoIosLogOut className='nav-icon' /></Link>
      </ul>
    </div>
  )
}

export default Navbar
