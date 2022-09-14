import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {

  const photos = [
    {
      src: "https://pix10.agoda.net/hotelImages/59736/-1/db24ed8c2fb70109ec687e5c8e39a43e.jpg?ca=0&ce=1&s=1024x768"
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/hotel/max500/238547394.jpg?k=002f36d005fe82b0a4f1ed3fc95ee0ed0a26a0a10cbd4f9e680dcc42a1ed2097&o="
    },
    {
      src: "https://aff.bstatic.com/images/hotel/840x460/156/156672332.jpg"
    },
    {
      src: "https://d1bv4heaa2n05k.cloudfront.net/posts%2FqMAvcE7r2d85hbtE7%2F1488370359026-ceylon-resized.jpg"
    },
    {
      src: "https://www.experiencetravelgroup.com/reposit/20191014083625.jpg"
    },
    {
      src: "https://www.greavesindia.com/wp-content/uploads/2015/03/tea-plantations.jpeg"
    },

  ];


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Cinnomon hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Colombo</span>
          </div>
          <span className="hotelDistance">500 m from centure</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property</span>
          <div className="hotelImages">
              {photos.map(photo=>(
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in hart of sri lanka</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia excepturi harum magnam quam. Voluptate vero praesentium ea! Explicabo omnis cum officiis numquam exercitationem consectetur beatae corrupti veritatis impedit minus!Lorem
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a night stay</h1>
              <span>
                This property has an excellent location
              </span>
              <h2>
                <b>$945</b> nights
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel