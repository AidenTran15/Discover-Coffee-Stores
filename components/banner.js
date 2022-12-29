import styles from './banner.module.css';

const Banner = ({buttonText, handleOnClick, bannerText}) => {
    return ( <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Coffee</span> 
            <span className={styles.title2}>Connoisseur</span></h1>
        <p className={styles.subtitle}>{bannerText ?? "Default"}</p>
        <button 
            className={styles.button}  
            onClick={handleOnClick}>
                {buttonText}
        </button>
    </div>
    ); 
};
export default Banner;