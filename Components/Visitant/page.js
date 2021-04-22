import styles from './style.module.css';
import Image from 'next/image';

const page = ({data}) => {

    return(
        <>
            <div className={`${styles.containerMessageVisitant}`}>
               <p className="p-3 text-white rounded-pill bg-success">{data.message}</p>
               <Image className="rounded-circle" src="/assets/imagevisitant.jpg"  height="50" width="50" />
            </div>
        </>
    )
}

export default page;