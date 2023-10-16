import styles from './Button.module.css' ; 

function Button({styleType , onClick , children}){
  return (
      <button className={styles[styleType]} onClick={onClick}>{children}</button>
  );
}
export default Button ;