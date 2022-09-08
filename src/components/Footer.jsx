import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "../assets/styles/Home.module.css";
const Footer = () => {
  return (
    <div className={`${styles.footer} space-y-4`}>
      <h4>Hubungi Kami melalui</h4>
      <div className="flex justify-center align-center space-x-2">
        <LocationOnIcon />
        <span>Jl. Banteng No. 36 Cimanggis Depok</span>
      </div>
      <div className="flex justify-center align-center space-x-2">
        <PhoneIcon />
        <span>087783386323</span>
      </div>
    </div>
  );
};

export default Footer;
