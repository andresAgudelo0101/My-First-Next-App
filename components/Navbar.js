import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar=()=> {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/">Criptos</Link>
                <Link href="/cripto_info">Cripto Info</Link>
                <Link href="/about">Acerca</Link>
            </div>
        </div>
    )
}

export default Navbar;