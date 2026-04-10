'use client';

import { ktSessions } from '../data/portfolio-data';
import styles from '../styles/KTSessions.module.css';

export default function KTSessions() {
    return (
        <section className={styles.section} id="knowledge-sharing">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Technical Leadership & KT Sessions</h2>
                <div className={styles.grid}>
                    {ktSessions.map((session) => (
                        <div key={session.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{session.icon}</span>
                                <h3 className={styles.title}>{session.title}</h3>
                            </div>
                            <p className={styles.description}>{session.description}</p>
                            
                            <div className={styles.takeaways}>
                                <h4 className={styles.takeawaysTitle}>Key Takeaways</h4>
                                <ul className={styles.list}>
                                    {session.keyTakeaways.map((takeaway, index) => (
                                        <li key={index} className={styles.listItem}>
                                            {takeaway}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
