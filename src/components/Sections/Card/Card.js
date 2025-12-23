import React from 'react';
import styles from './Card.module.scss';

function Card({ image, author, title, materials, price }) {
    return (
        <div className={styles.pictureCard}>
            <img 
                src={process.env.PUBLIC_URL + image}
                alt={title}
                className={styles.picture}
            />
            <p className={styles.author}>{author}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.materials}>{materials}</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.buttonBasket}>В корзину</button>
        </div>
    );
}

export default Card;