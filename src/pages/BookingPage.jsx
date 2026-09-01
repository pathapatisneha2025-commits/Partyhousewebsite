import { useState, useEffect } from "react";
import { Footer } from "../component/footersection";
import RoomsSection from "../component/roomcard";

const BASE_URL = "https://api.ajpartyhouse.in";

export default function BookingPage() {
  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden !important;
          width: 100%;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        .booking-page {
          width: 100%;
          min-height: 100vh;
          padding: 50px 5%;
          background: #fdf6f0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .booking-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.8rem;
          color: #333;
        }

        .booking-container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form input,
        .form select,
        .form textarea {
          width:100%;
          padding:14px 16px;
          border-radius:12px;
          border:1px solid #ddd;
          font-size:16px;
          outline:none;
        }

        .form textarea {
          resize: vertical;
        }

        .submit-btn {
          width:100%;
          padding:15px;
          border-radius:50px;
          border:none;
          background:#c59d5f;
          color:white;
          font-size:18px;
          font-weight:bold;
          cursor:pointer;
        }


        @media(max-width:768px){

          .booking-page {
            padding:40px 16px;
          }


          .booking-title {
            font-size:2rem;
          }


          .booking-container {
            width:100%;
            padding:24px;
            border-radius:16px;
          }


          .form {
            gap:15px;
          }


          .form input,
          .form select,
          .form textarea {
            font-size:15px;
            padding:12px;
          }


          .submit-btn {
            font-size:16px;
            padding:12px;
          }

        }


        @media(max-width:480px){

          .booking-page {
            padding:30px 12px;
          }


          .booking-title {
            font-size:1.7rem;
          }


          .booking-container {
            padding:18px;
            border-radius:14px;
          }


          .form {
            gap:12px;
          }


          .form input,
          .form select,
          .form textarea {
            font-size:14px;
            padding:10px;
            border-radius:10px;
          }


          .submit-btn {
            padding:10px;
            font-size:15px;
          }

        }

      `}</style>

      <MainBookingPage />
    </>
  );
}


function MainBookingPage() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    date:"",
    guests:"",
    message:"",
    service:"",
    roomId:"",
  });


  const [loading,setLoading] = useState(false);
  const [rooms,setRooms] = useState([]);
  const [bookings,setBookings] = useState([]);


  const services=[
    "Cold Fire 2 - 499/-",
    "Cold Fire 4 - 799/-",
    "Balloons - 499/-",
    "Candle Entry - 499/-",
    "Name Board - 99/-",
    "Age Board - 99/-",
    "Light Effect - 499/-",
    "Fire Gun - 499/-",
    "Fog Entry - 499/-",
    "Photography Add-on - 3000/-"
  ];


  useEffect(()=>{

    const fetchData=async()=>{

      try{

        const roomsRes=await fetch(`${BASE_URL}/rooms/all`);
        const roomsData=await roomsRes.json();

        const bookingsRes=await fetch(`${BASE_URL}/bookings/all`);
        const bookingsData=await bookingsRes.json();


        setRooms(roomsData);
        setBookings(bookingsData);

      }
      catch(err){
        console.log(err);
      }

    };


    fetchData();

  },[]);



  const handleChange=(field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]:value
    }));
  };


  const handleDateChange=(value)=>{
    setFormData(prev=>({
      ...prev,
      date:value,
      roomId:""
    }));
  };



  const handleSubmit=async(e)=>{

    e.preventDefault();


    if(
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.roomId
    ){
      alert("Please fill all required fields!");
      return;
    }


    setLoading(true);


    try{

      const response=await fetch(
        `${BASE_URL}/bookings/add`,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            ...formData,
            room:formData.roomId
          })
        }
      );


      const result=await response.json();


      if(response.ok){

        alert("Booking submitted successfully!");

        setFormData({
          name:"",
          email:"",
          phone:"",
          date:"",
          guests:"",
          message:"",
          service:"",
          roomId:""
        });


      }
      else{
        alert(result.error);
      }


    }
    catch(err){

      alert("Server error");

    }


    setLoading(false);

  };



  return(
    <>

    <div className="booking-page">


      <RoomsSection />


      <h1 className="booking-title">
        Event Booking
      </h1>



      <div className="booking-container">


      <form 
      onSubmit={handleSubmit}
      className="form"
      >



      <input
      placeholder="Full Name *"
      value={formData.name}
      onChange={(e)=>handleChange("name",e.target.value)}
      />


      <input
      type="email"
      placeholder="Email Address *"
      value={formData.email}
      onChange={(e)=>handleChange("email",e.target.value)}
      />


      <input
      type="tel"
      placeholder="Phone Number *"
      value={formData.phone}
      onChange={(e)=>handleChange("phone",e.target.value)}
      />



      <input
      type="date"
      value={formData.date}
      min={new Date().toISOString().split("T")[0]}
      onChange={(e)=>handleDateChange(e.target.value)}
      />



      <input
      type="number"
      placeholder="Number of Guests"
      value={formData.guests}
      onChange={(e)=>handleChange("guests",e.target.value)}
      />



      <select
      value={formData.roomId}
      onChange={(e)=>handleChange("roomId",e.target.value)}
      >

      <option value="">
      Select a Room *
      </option>


      {
      rooms.map(room=>{

        const booked=bookings.some(
          b=>b.roomid===room.id &&
          b.event_date===formData.date
        );


        return(
          <option
          key={room.id}
          value={room.id}
          disabled={booked}
          >
          {room.name} - Capacity {room.capacity} - ₹{room.price}
          {booked ? " (Booked)" : ""}
          </option>
        )

      })
      }

      </select>



      <select
      value={formData.service}
      onChange={(e)=>handleChange("service",e.target.value)}
      >

      <option value="">
      Select Service (Optional)
      </option>

      {
      services.map(s=>
      <option key={s}>{s}</option>
      )
      }

      </select>



      <textarea
      rows="5"
      placeholder="Additional Details"
      value={formData.message}
      onChange={(e)=>handleChange("message",e.target.value)}
      />



      <button
      className="submit-btn"
      disabled={loading}
      >

      {loading ? "Submitting..." : "Submit Booking"}

      </button>


      </form>


      </div>


    </div>


    <Footer />

    </>
  );

}