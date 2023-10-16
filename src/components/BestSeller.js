import styles from './BestSeller.module.css' ; 

function BestSeller({title , children}){
  return (
    <div className={styles.main}>
        <p className={styles.title}> {title} </p>
        <div className={styles.panners}>
            {children}
        </div>
    </div>
  );
}

export default BestSeller ;