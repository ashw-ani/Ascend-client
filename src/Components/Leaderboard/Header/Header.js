import styles from "./Header.module.css";
import Heading from "./Heading/Heading";
import AccountIcon from "./account icon/Accounticon";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Heading />
      {/* <AccountIcon /> */}
    </div>
  );
};
export default Header;
