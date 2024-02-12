import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRight {new Date().getFullYear()} by Worldwsie
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
