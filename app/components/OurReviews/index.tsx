import styles from './style.module.scss';

const arr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fuga?'];

const OurReviews = () => {
    return <div className={styles.wrapper}>
        <h2>Отзывы наших клиентов</h2>
        <div className={styles.list_wrapper}>
            {arr.map((item, index) => {
                return <div className={styles.list} key={index}>
                    <span>{item}</span>
                </div>
            })}
        </div>
    </div>
};

export default OurReviews;