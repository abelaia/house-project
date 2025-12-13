import React from 'react'
import styles from './Footer.module.scss'

export const logo = process.env.PUBLIC_URL + '/assets/logo.svg';
export const facebook = process.env.PUBLIC_URL + '/assets/facebook.svg';
export const inst = process.env.PUBLIC_URL + '/assets/inst.svg';
export const youtube = process.env.PUBLIC_URL + '/assets/youtube.svg';

function Footer() {
    return(
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoWithNumber}>
                    <img src={logo}
                         alt="Logo lnk.House"
                    />
                    <p className={styles.number}>+7 (999) 543-54-54</p>
                    <p className={styles.address}>Мастерская</p>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h4 className={styles.title}>Репродукции</h4>
                        <ul className={styles.nav}>
                            <li>Франция</li>
                            <li>Германия</li>
                            <li>Англия</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.title}>Новинки</h4>
                        <ul className={styles.nav}>
                            <li>2021</li>
                            <li>2020</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className={styles.title}>О нас</h4>
                        <ul className={styles.nav}>
                            <li>Художники</li>
                            <li>Менеджеры</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.socialColumn}>
                    <div className={styles.socialNetworks}>
                        <img src={facebook}
                             alt="facebook"
                             className={styles.imgNetworks}
                        />
                        <img src={inst}
                             alt="inst"
                             className={styles.imgNetworks}
                        />
                        <img src={youtube}
                             alt="youtube"
                             className={styles.imgNetworks}
                        />
                    </div>
                    <p className={styles.copyright}>Ink. House ®</p>
                    <p className={styles.copyright}>All rights reserved</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;