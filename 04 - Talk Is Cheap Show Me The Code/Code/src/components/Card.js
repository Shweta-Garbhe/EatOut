import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card mt-3">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="restaurant-menu"
        className="card-image"
      />
      <div className="rest-name pt-3">{name}</div>
      <div className="rest-menu">{cuisines.join(", ")}</div>
      <div className="rest-info">
        <div className="rest-ratings">
          <span className="icon-star">
            <FontAwesomeIcon icon={faStar} size="2xs" />
            &nbsp;{avgRating}
          </span>
        </div>
        <div>•</div>
        <div className="rest-distance">{slaString}</div>
        <div>•</div>
        <div className="approx-price">{costForTwoString}</div>
      </div>
    </div>
  );
};
