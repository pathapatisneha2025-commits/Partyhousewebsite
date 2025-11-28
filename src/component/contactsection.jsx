import React from "react";
import contactBg from "../assets/ContactBg.jpg";
import contactroom from "../assets/contactroom.png";

export const ContactSection = () => {
  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  };

  return (
    <section
      id="contact-section"
      className="relative bg-cover bg-center center-div"
      style={{ backgroundImage: `url(${contactBg})`, padding: "50px 0" }}
    >
      {/* Background overlay */}
      <div className="absolute bg-green opacity-30"></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="center-div">
          <h2 className="hed fslargest color-gray text-center">CONTACT US</h2>
        </div>

        {/* MAIN GRID – Always 2 Columns */}
        <div className="contact-grid mt-10">
          {/* LEFT: FORM */}
          <div className="bg-white p-8 shadow-xl rounded-xl">
            <h3 className="hed fslarge mb-2 text-center">Get In Touch</h3>

            <form className="grid gap-6 mt-6">
              
              {/* Name + Email */}
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <input type="text" placeholder="Name" style={inputStyle} />
                <input type="email" placeholder="Email" style={inputStyle} />
              </div>

              {/* Phone + Event Date */}
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <input type="text" placeholder="Phone" style={inputStyle} />

                <input
                  type="date"
                  placeholder="Event Date"
                  style={{
                    ...inputStyle,
                    color: "#888",
                  }}
                />
              </div>

              {/* Event Type + Guests */}
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <select style={inputStyle}>
                  <option>Select Type</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Engagement</option>
                </select>

                <input type="number" placeholder="No. of Guests" style={inputStyle} />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                style={{ ...inputStyle, resize: "none" }}
              ></textarea>

              {/* Submit */}
              <button
                className="bg-black text-white px-6 py-3 rounded-xl"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT: IMAGE + INFO */}
          <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center">
            <img src={contactroom} alt="Room" className="w-full rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2 text-center">Party House</p>
            <p className="text-center">
              Book your perfect event space! <br />
              Reach out to us anytime.
            </p>
          </div>
        </div>
      </div>

      {/* CSS For fixed layout */}
      <style>
        {`
            .contact-grid {
              display: grid;
              grid-template-columns: 2fr 1fr;
              gap: 48px;
              width: 100%;
            }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
