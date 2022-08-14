import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
interface Props{
  className?:string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({className, style}: Props) => {
  //TODO: maxCount, isMaxCountReach
  
  // TODO: isMaxReached = useCallback, [count,maxCount]

  // TRUE Si lo es
  // FALSE si no lo es
  const {increaseBy, counter,maxCount} = useContext(ProductContext);
  const isMaxReach=useCallback(
    () => !!maxCount && counter ===maxCount,  
    [counter,maxCount],
  )
     
  return (
      <div style={style} className={`${styles.buttonContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={ `${styles.buttonAdd} ${isMaxReach() && styles.disabled}`} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    );
  };