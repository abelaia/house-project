import React, { useState } from 'react';
import styles from './Reproductions.module.scss'
import { pictures, countries } from './constants.js';

function Reproductions() {
    const [activeCountry, setActiveCountry] = useState('Франция');

    const filteredPictures = pictures.filter(
        picture => picture.country === activeCountry
    );

    return (
        <section className={styles.reproductions}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Репродукции</h2>
                    <div className={styles.categories}>
                        {countries.map(country => (
                            <button
                                key={country}
                                className={`${styles.buttonCategories} ${
                                    activeCountry === country ? styles.active : ''
                                }`}
                                onClick={() => setActiveCountry(country)}
                            >
                                {country}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.pictureGrid}>
                    {filteredPictures.map(picture => (
                        <div key={picture.id} className={styles.pictureCard}>
                            <img 
                                src={process.env.PUBLIC_URL + picture.image}
                                alt={picture.title}
                                className={styles.picture}
                            />
                            <p className={styles.author}>{picture.author}</p>
                            <h3 className={styles.title}>{picture.title}</h3>
                            <p className={styles.materials}>{picture.materials}</p>
                            <p className={styles.price}>{picture.price}</p>
                            <button className={styles.buttonBasket}>В корзину</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reproductions;