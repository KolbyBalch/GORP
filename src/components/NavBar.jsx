import styles from '../styles/NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className={styles.navBar} id="navBar">
            <div className={styles.imageContainer}>
                <Image src='/journey-church-logo.png' alt="Journey Church logo" layout="fill"/>
            </div>
        </div>
    )
}