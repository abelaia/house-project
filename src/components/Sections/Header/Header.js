import React from 'react';
import styles from './Header.module.scss'

const logo = process.env.PUBLIC_URL + '/assets/logo.svg';
const basket = process.env.PUBLIC_URL + '/assets/basket.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo}
                     alt="Logo lnk.House"
                     className={styles.logo}
                />
                <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                        <li>Репродукции</li>
                        <li>Новинки</li>
                        <li>О нас</li>
                    </ul>
                    <button className={styles.buttonBasket}>
                        <img src={basket}
                            alt="Корзина"
                        />
                    </button>
                </nav>
            </div>                
        </header>
    );
}

export default Header;
