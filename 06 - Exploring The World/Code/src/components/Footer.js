import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer mt-5 mb-2">
      Copyright <FontAwesomeIcon icon={faCopyright} size="xs" />
      &nbsp;2023 &nbsp;
      {/* <a href="https://www.linkedin.com/in/shweta-adya/" target="_blank">
        Shweta Garbhe
      </a> */}
      Eat Out - Developed By Shweta Garbhe
    </div>
  );
};

export default Footer;
