import React from 'react'

import Image from 'next/image'
import LogoImg from '../../Assets/logo.png'

import styles from './header.module.css'

const Header = () => {

    return (
    <header className={styles.main}>
        <main>
            <div>Logo</div>
            <Image src={LogoImg}
                alt='logo' />
            <nav className={styles.navigation}>
                <li>Home</li>
                <li>About us</li>
                <li>Showcase</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Sign in</li>
            </nav>
        </main>
    </header>
        )
}

export default Header