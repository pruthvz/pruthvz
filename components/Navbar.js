import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Github</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Navbar;
