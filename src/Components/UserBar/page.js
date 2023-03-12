import styles from './style.module.css';
import Image from 'next/image';

const Page = () => {
    return(
        <>
            <div className={styles.userbarContainer}>
                <Image className="rounded-circle" src="/assets/imagebot.jpg" height="50" width="50"/>
                <p className="h3 p-1 text-white">
                 BOT
                </p>
            </div>
        </>
    )
}

export default Page;