import styles from './Heading.module.css';

const Heading = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>Water Enthusiast Leaderboards</div>
    </div>
  );
};
export default Heading;
