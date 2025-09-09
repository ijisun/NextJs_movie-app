"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/nav.module.css";

export default function Navigation() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button onClick={goBack}>Go Back</button>
        </li>
      </ul>
    </nav>
  );
}
