import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://www.thespruce.com/thmb/aGEhef5NbpY6R_Fahn5fIW8SAHk=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Johns Rooms</h1>
                <div className="detailItem">
                  <span className="itemKey">type</span>
                  <span className="itemValue">single</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey"> <address></address></span>
                  <span className="itemValue">Bentota</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey"> contactNumber </span>
                  <span className="itemValue">: 0912267439</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey"> type</span>
                  <span className="itemValue">single</span>
                </div>

              
            
                <div className="detailItem">
                  <span className="itemKey"> price</span>
                  <span className="itemValue">50</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">distance</span>
                  <span className="itemValue">
                  200
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">rating</span>
                  <span className="itemValue">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          
          </div>
        </div>
        <div className="bottom">
        
        </div>
      </div>
    </div>
  );
};

export default Single;
