import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Hooman Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          Google!
        </a>
        <span> Next.js course | HoomanFood &copy;</span>
      </footer>
    </div>
  );
};

export default Layout;
