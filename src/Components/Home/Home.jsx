import './Home.css'
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import Popular from '../Popular/Popular';


const Home = () => {
  const [searchToggle, setSearchToggle] = useState(false)

  return (
    <div className='home'>
      <div className="top-home">
        <h2><span>sonify</span> music</h2>
        <IoIosSearch className='search-icon' onClick={() => setSearchToggle(!searchToggle)} />
        <div className={searchToggle ? "search-bar-active" : 'search-bar'}>
          <div className="with">
            <input type="text" className="search" placeholder='write music name' />
            <IoIosSearch className='click-search' />
          </div>
          <CiCircleRemove className='remove-search-bar' onClick={() => setSearchToggle(!searchToggle)} />
        </div>
      </div>
      <div className="popular-comp">
        <h2>popular musics</h2>
        <Popular />
      </div>
    </div>
  )
}

export default Home
