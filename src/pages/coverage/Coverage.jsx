import React, { Suspense } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";

function Coverage() {
  const position = [23.8103, 90.4125];
  const mapRef = React.useRef();

  const axiosSecure = useAxiosSecure();

  const { data: serviceCenters = [] } = useQuery({
    queryKey: ["coverage"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/coverage`);
      return res.data;
    },
  });

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value.toLowerCase();
    //const district = serviceCenters.find(center => center.district.toLowerCase() === location);
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      // mapRef.current.setView(coord, 12);
      mapRef.current.flyTo(coord, 13);
    }
  };
  const searchIconClick = () => {
    const location = document.querySelector('input[name="location"]').value;
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13);
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg py-2 my-4">
      <div className="text-center mb-4">
        <h2 className="text-[32px] font-bold text-[#22c122] mx-auto">
          Coverage Page
        </h2>
        <p>
          Explore all partner libraries where BookCourier delivers books
          directly to your doorstep.
        </p>
      </div>
      <div className="flex items-center justify-between mb-1 w-[97.5%] mx-auto font-semibold">
        <p>Search for your District :</p>
        <div>
          <form onSubmit={handleSearch} className="search-form">
            <label className="input flex ml-[10px]">
              <svg
                onClick={searchIconClick}
                className="h-full opacity-50 cursor-pointer border-r-1 border-gray-600 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="location"
                required
                placeholder="Search"
              />
            </label>
          </form>
        </div>
      </div>

      <div>
        <MapContainer
          center={position}
          zoom={7.5}
          scrollWheelZoom={false}
          style={{ height: "600px", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Suspense fallback={<div>Loading markers...</div>}>
            {serviceCenters.map((center, idx) => (
              <Marker key={idx} position={[center.latitude, center.longitude]}>
                <Popup>{center.district}</Popup>
              </Marker>
            ))}
          </Suspense>
        </MapContainer>
      </div>
    </div>
  );
}
export default Coverage;
