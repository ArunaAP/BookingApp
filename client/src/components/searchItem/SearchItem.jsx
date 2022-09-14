import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
       <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685293.webp?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o=" alt="" className="siImg" />

       <div className="siDesc">
        <h1 className="siTitle">Cinnomon hotel</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">room 2 . 2 full bed</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
         <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
          <button className="siCheckButton">See availability</button>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
