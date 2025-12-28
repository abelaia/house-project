import React from 'react';
import styles from './Hero.module.scss';

const bird = process.env.PUBLIC_URL + '/assets/bird.jpg';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <img src={bird}
                     alt="Bird"
                />
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Реплики картин от <span className={styles.highlight}>Ink. House</span>
                    </h1>
                    <p className={styles.description}>
                        Высокое качество отрисовки на плотной бумаге или льняном холсте.
                        Редкие произведения, доступные цены.
                    </p>
                    <button className={styles.buttonProducts}
                            onClick={() => window.scrollTo(0, 790)}
                    >
                        Продукция
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
