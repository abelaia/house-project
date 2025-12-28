import React from 'react';
import { logo, footerColumns, socialNetworks } from './constants.js';
import styles from './Footer.module.scss';

function Footer() {
    return(
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoWithNumber}>
                    <img 
                         src={logo}
                         alt="Logo lnk.House"
                         className={styles.logo}
                    />
                    <a 
                        href="number: +79995435454"
                        className={styles.number}
                    >
                        +7 (999) 543-54-54
                    </a>
                    <p className={styles.address}>Мастерская</p>
                </div>

                <div className={styles.columns}>
                    {footerColumns.map((column) => (
                        <div className={styles.column}>
                            <h4 className={styles.title}>
                                {column.title}
                            </h4>
                            <ul className={styles.navigation}>
                                {column.items.map((item, index) => (
                                    <li 
                                        key={index}
                                        className={styles.navigationItem}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.socialColumn}>
                    <div className={styles.socialNetworks}>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={network.href}
                                className={styles.socialLink}
                            >
                                <img 
                                    src={network.src}
                                    alt={network.alt}
                                    className={styles.imgNetworks}
                                />
                            </a>
                        ))}
                    </div>
                    <p className={styles.copyright}>Ink. House ®</p>
                    <p className={styles.copyright}>All rights reserved</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
