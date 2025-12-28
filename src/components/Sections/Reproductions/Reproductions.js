import React, { useState } from 'react';
import { pictures, countries } from './constants.js';
import Card from '../Card/Card';
import styles from './Reproductions.module.scss';

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
                        <Card 
                            key={picture.id}
                            image={picture.image}
                            author={picture.author}
                            title={picture.title}
                            materials={picture.materials}
                            price={picture.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reproductions;
