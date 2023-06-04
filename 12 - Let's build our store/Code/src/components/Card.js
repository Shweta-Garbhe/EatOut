import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { configData } from "../Config";

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
          configData.IMG_CDN_URL
            ? configData.IMG_CDN_URL + cloudinaryImageId
            : configData.IMG_CDN_URL_FIT + cloudinaryImageId
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
            &nbsp;{avgRating == "--" ? 0 : avgRating}
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
