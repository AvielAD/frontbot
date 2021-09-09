import styles from './style.module.css';
import Image from 'next/image';

const page = ({data}) => {

    return(
        <>
            <div className={`${styles.containerMessageBot}`}>
                <Image className="rounded-circle" src="/assets/imagebot.jpg" height="50" width="50" />
                <p className="p-3 d-flex align-items-center text-white rounded-pill bg-primary">{data.message}</p>
                
            </div>
        </>
    )
}

export default page;