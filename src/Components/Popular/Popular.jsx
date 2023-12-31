import "swiper/css";
import './Popular.css'
import { useEffect, useState } from 'react';
import trackBg from '../../Images/track-bg.jpg'
import { IoPersonCircle } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
import { GrAssistListening } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdDriveFileRenameOutline } from "react-icons/md";

const Popular = () => {
  const [popularMusic, setPopularMusic] = useState()
  const [musicModal, setMusicModal] = useState(false)

  const musicModalToggle = () => {
    setMusicModal(!musicModal)
  }

  useEffect(() => {
    const apiKey = 'ab620fcc763445f5d0bea04c5ca1c227'

    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`)
      .then((response) => response.json())
      .then(tracks => {
        const musicData = tracks.tracks.track
        console.log(musicData)
        setPopularMusic(musicData)
      })
  }, [])

  return (
    <div className='popular'>
         <Swiper className="mySwiper">
         {popularMusic.map((track, index) => (
          <SwiperSlide key={index}>
            <h2>{track.name}</h2>
            <img src={trackBg} alt={track.name} />
            <p className="artist"><IoPersonCircle />{track.artist.name}</p>
            <h5 className="listeners"><GrAssistListening /> {track.listeners}</h5>
            <p className="play" onClick={musicModalToggle}><FaRegPlayCircle /></p>
            <h5 className="music-name"><MdDriveFileRenameOutline /> {track.name.slice(0, 15)}</h5>
          </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Popular
