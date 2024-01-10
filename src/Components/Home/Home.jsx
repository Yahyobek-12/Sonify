import './Home.css'
import axios from 'axios'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import noteImg from '../Images/logo.webp'
import { FcSearch } from "react-icons/fc";
import { IoHeadset } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";


const Home = () => {
  const [videos, setVideos] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const searchHandler = async () => {
    try {
      const response = await axios.get(`
        https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=AIzaSyBqE8OMbdKd-7NOT_LBvkgATb8huk3sPHI
      `)
      setVideos(response.data.items)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const selectedHandler = (video) => {
    setSelectedVideo(video)
  }
    
  return (
    <div className='home'>

        <div className="logo">
            <h3>sonify <span>music</span></h3>
        </div>

        <div className="search-bar">
            <input type="text" placeholder='search music' className='search-inp' 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <FcSearch className='search-btn' onClick={searchHandler} />
        </div>
        
        <div className="result">
          <h3>result for <span>{searchQuery}</span></h3>
          {videos.map((video) => (
            <div className='result-music' key={video.id.videoId}>
              <IoHeadset className='listen-btn' onClick={() => selectedHandler(video)} />
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className='music-image' />
              <h5 className="music-title">{video.snippet.title.slice(0, 12)}</h5>
            </div>
          ))}
        </div>

        <div className="selected">
          {selectedVideo && (
            <div className="selected-video">
              <div className="back-home">
                <IoMdArrowRoundBack className='back-home-icon' /> <p>home</p>
              </div>
              <ReactPlayer url={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              width='100%' />
                {videos.map((video) => (
                  <>
                    {selectedVideo.id.videoId === video.id.videoId && (
                      <div className="about-video">
                        <h3 className='channel'>channel: {video.snippet.channelTitle}</h3>
                        <p className="created">created at: {video.snippet.publishTime.slice(0, 10)}</p>
                      </div>
                    )}
                  </>
                ))}
                <div className="more">
                  <p>similar videos</p>
                </div>
            </div>
          )}
        </div>

        <div className="note">
              <img src={noteImg} alt="note-img" />        
        </div>

    </div>
  )
}

export default Home