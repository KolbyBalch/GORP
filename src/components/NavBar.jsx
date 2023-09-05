import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import { Menu } from '@headlessui/react'

export default function NavBar() {
    return (
        <div className={styles.navBar} id="navBar">
            <div>
                <Menu as="div">
                    <div>
                        <Menu.Button className={styles.menuButton}>
                            <div className={styles.hamburgerLines}>
                                <span className={styles.line1}></span>
                                <span className={styles.line2}></span>
                                <span className={styles.line3}></span>
                            </div> 
                        </Menu.Button>
                        <Menu.Items className={styles.menuItems}>
                            <Menu.Item className={styles.menuItem}>
                                {({ active }) => (
                                    <a
                                        href="/"
                                    ><button className={styles.sectionLink}>Home</button></a>
                                )}
                            </Menu.Item>
                            <Menu.Item className={styles.menuItem}>
                                {({ active }) => (
                                    <a
                                        href="/contact"
                                    ><button className={styles.sectionLink}>What we believe</button></a>
                                )}
                            </Menu.Item>
                            <Menu.Item className={styles.menuItem}>
                                {({ active }) => (
                                    <a
                                        href="/contact"
                                    ><button className={styles.sectionLink}>What to expect</button></a>
                                )}
                            </Menu.Item>
                            <Menu.Item className={styles.menuItem}>
                                {({ active }) => (
                                    <a
                                        href="/contact"
                                    ><button className={styles.lastLink}>Contact us</button></a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Menu>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/journey-church-logo.png' alt="Journey Church logo" layout="fill"/>
            </div>
        </div>
    )
}