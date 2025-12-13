import React from 'react';
import styles from './News.module.scss'

const background = process.env.PUBLIC_URL + '/assets/background.png';
const star = process.env.PUBLIC_URL + '/assets/star.svg';

function News() {
    return(
        <section className={styles.news}>
            <div className={styles.container}> 
                <img src={background}
                     alt="Фон"
                     className={styles.background}
                />
                <div className={styles.titleWithStar}>
                    <img src={star}
                         alt="Star"
                         className={styles.star}
                    />
                    <h2 className={styles.title}>
                        Новая коллекция<br/>
                        французских авторов
                    </h2>
                </div>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        Сложно сказать, почему акционеры крупнейших компаний<br/>
                        призывают нас к новым свершениям, которые, в свою очередь,<br/>
                        должны быть заблокированы в рамках своих<br/>
                        собственных рациональных ограничений.
                    </p>
                    <p className={styles.description}>
                        Принимая во внимание показатели успешности, граница<br/>
                        обучения кадров предопределяет высокую востребованность<br/>
                        направлений прогрессивного развития.
                    </p>
                </div>
                <button className={styles.buttonLearn}
                        onClick={() => window.scrollTo(0, 0)}
                >
                        Ознакомиться
                </button>
            </div>
        </section>
    );
}

export default News;