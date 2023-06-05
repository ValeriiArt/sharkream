

import styles from './styles.module.scss';

type Properties = {
    name: string;
    avatar_src: string;
    feedback: string;
};


const FeedbackCard: React.FC<Properties> = ({
    name,
    avatar_src,
    feedback,
}) => {

    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>
                <img className={styles.userAvatar} src={avatar_src} alt={name} />
                <span className={styles.userName}>{name}</span>
            </div>
            <p className={styles.feedback}>{feedback}</p>
        </div>
    );
};

export { FeedbackCard };
