import styles from './SocialIcons.module.css' ; 

function SocialIcons({styleType}){
    return (
        <div className={styles[styleType]}>
            <img src="img/facebook.svg" alt="facebook" />
            <img src="img/gmail.svg" alt="gmail" />
            <img src="img/cloud.svg" alt="cloud" />
        </div>
    );
}
export default SocialIcons ;