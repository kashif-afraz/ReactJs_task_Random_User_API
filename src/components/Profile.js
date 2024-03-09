import Map from "../assets/icons/Map";
import Call from "../assets/icons/Call";
import Mail from "../assets/icons/Mail";
import { useLocation } from "react-router-dom";
export const Profile = (props) => {

  const location = useLocation();

  console.log(location.state)
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center col-md-6 bg-info">
      <img
            src={location.state?.user?.picture?.large}
            alt="User"
            className="rounded-circle mx-auto d-block"
            style={{ width: "150px", height: "150px" }} // Set width and height for circular image
          />
        <div className="card-body">
          <h5 className="card-title">{location.state?.user?.name?.first + " " +location.state?.user?.name?.last}</h5>
          <p className="card-text">
            {"DOB:" + location.state?.user?.dob?.date }+ <br /> Age {location.state?.user?.dob?.age}
            {"Email:" + location.state?.user?.email }+ <br /> Cell {location.state?.user?.cell}
          </p>

          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <a href={`tel:${location.state?.user?.cell}`} className="card-link">
                <Call />
              </a>
            </div>{" "}
            <div className="col-md-4 d-flex justify-content-center">
              <a href={`https://www.google.com/maps/search/?api=1&query=${location.state?.user?.location?.coordinates?.latitude},${location.state?.user?.location?.coordinates?.longitude}`} class="card-link">
                <Map />
              </a>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <a href={`mailto:${location.state?.user?.email}`} class="card-link">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
