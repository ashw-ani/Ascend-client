import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";

const Header = (props) => {
  const forphone = useMediaQuery({ maxWidth: "950px" });

  return <div className={styles.header}>{forphone ? "" : props.children}</div>;
};
export default Header;
