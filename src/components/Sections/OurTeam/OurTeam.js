import React from 'react';
import styles from './OurTeam.module.scss'
import { brushes, team } from './constants.js'

function OurTeam() {
    return(
        <section className={styles.ourTeam}>
            <div className={styles.container}>
                <img src={brushes}
                     alt="Кисти"
                     className={styles.brushes}
                />
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Наша команда</h2>
                    <p className={styles.decription}>
                        Значимость этих проблем настолько очевидна, что базовый вектор<br/>
                        развития позволяет оценить значение экспериментов, поражающих<br/>
                        по своей масштабности и грандиозности. Мы вынуждены отталкиваться<br/>
                        от того, что консультация с широким активом.
                    </p>
                    <div className={styles.team}>
                        {team.map(member => (
                            <div key={member.id}>
                                <img src={process.env.PUBLIC_URL + member.img}
                                     alt={member.alt}
                                     className={styles.member}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeam;