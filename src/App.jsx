import React, { useEffect, useState } from "react";
import ClinicCard from "./Components/ClinicCard";
import "./scrollBar.css";
import FilterNavbar from "./Components/FilterNavbar";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const destinationCoordinates = "41.87831986540261,-87.70100882538976";

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Function to generate the Google Maps Directions link
  const generateDirectionsLink = () => {
    if (!currentLocation) {
      return null; // Return null if current location is not available
    }

    const origin = encodeURIComponent(currentLocation);
    const destination = encodeURIComponent(destinationCoordinates);
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  };

  return (
    <main className="w-full">
      <FilterNavbar />

      <div className="w-full flex clinic-card-950:flex-row flex-col">
        <div className="clinic-card-950:w-[60%] w-full min-h-screen max-h-screen overflow-auto">
          <ClinicCard />
          <ClinicCard />
          <ClinicCard />
          <ClinicCard />
        </div>

        <div className="clinic-card-950:w-[40%] w-full p-5">
          <div className="border-[7px] border-[#373174] rounded-lg shadow-lg shadow-slate-500">
            <iframe
              src={`https://www.google.com/maps/embed?pb=${destinationCoordinates}&output=embed`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[30vw] "
            />
          </div>
          {/* Button for Directions */}
          <button
            onClick={() => window.open(generateDirectionsLink(), "_blank")}
          >
            Get Directions
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
