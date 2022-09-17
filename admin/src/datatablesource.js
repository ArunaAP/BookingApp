export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "photos",
    headerName: "Image",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.photos}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },

  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 100,
  },

  {
    field: "type",
    headerName: "Address",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },

  {
    field: "distance",
    headerName: "Distance",
    width: 100,
  },

  {
    field: "rating",
    headerName: "Rating",
    width: 100,
  },
 
];

//temporary data
export const userRows = [
  {
    id: 1,
    photos: "https://www.thespruce.com/thmb/aGEhef5NbpY6R_Fahn5fIW8SAHk=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
    name: "Johns Rooms",   
    address: "Bentota",
    contactNumber: "0912267439",
    type: "Single",
    price: 50,
    distance: 200,
    rating: 2,
  },


  {
    id: 2,
    photos: "https://www.thespruce.com/thmb/aGEhef5NbpY6R_Fahn5fIW8SAHk=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
    name: "shane Rooms",   
    address: "Galle",
    contactNumber: "0910000056",
    type: "Double",
    price: 25,
    distance: 500,
    rating: 5,
  },


  {
    id: 3,
    photos: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Lions Rooms",   
    address: "Kandy",
    contactNumber: "08254297163",
    type: "Double",
    price: 25,
    distance: 500,
    rating: 4,
  },



  {
    id: 4,
    photos: "https://www.thespruce.com/thmb/aGEhef5NbpY6R_Fahn5fIW8SAHk=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
    name: "Nisal Rooms",   
    address: "Katharagma",
    contactNumber: "0912256903",
    type: "Single",
    price: 50,
    distance: 100,
    rating: 5,
  },


  {
    id: 5,
    photos: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Jenny Rooms",   
    address: "Kandy",
    contactNumber: "0812264579",
    type: "Single",
    price: 150,
    distance:50,
    rating: 4,
  },




  {
    id: 6,
    photos: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Araliya Rooms",   
    address: "katharagama",
    contactNumber: "0912398347",
    type: "Double",
    price: 75,
    distance: 200,
    rating: 3,
  },



  {
    id: 7,
    photos: "https://images.pexels.com.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Perera Rooms",   
    address: "Anuradhapura",
    contactNumber: "0362278099",
    type: "Single",
    price: 35,
    distance: 400,
    rating: 2,
  },




  {
    id: 8,
    photos: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Janu Rooms",   
    address: "Kalutara",
    contactNumber: "0342299080",
    type: "Double",
    price: 50,
    distance: 50,
    rating: 3,
  },



  {
    id: 9,
    photos: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "City Rooms",   
    address: "Anuradhapura",
    contactNumber: "0362224758",
    type: "Double",
    price: 150,
    distance: 200,
    rating: 5,
  },


 
  
];
