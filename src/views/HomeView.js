import welcomeImg from '../img/phonebook.png';
import styles from './styles.module.css';

const HomeView = () => (
  <div className={styles.homeViewContainer}>
    <img src={welcomeImg} width="300" alt="Welcome!" />
  </div>
);

export default HomeView;
