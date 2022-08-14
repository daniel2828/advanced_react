import styles from "../styles/styles.module.css";


import { useProduct } from "../hooks/useProduct";
import { createContext,ReactElement } from "react";
import {InitialValues, onChangeArgs, Product,  ProductCardHandlers,  ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;



export interface Props {
  product: Product;
  children: (args:ProductCardHandlers)=>JSX.Element;
  className?:string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs)=>void;
  value?:number;
  initialValues?: InitialValues
}
export const ProductCard = ({ product , children ,className, style, onChange,value,initialValues}: Props) => {
  const { counter, increaseBy, maxCount,isMaxCountReached,reset } = useProduct({product,onChange,value,initialValues});
  return (
    <Provider
        value={{counter,increaseBy,maxCount,product}}
    >
    <div className={`${styles.productCard} ${className}`}
    style={style}>
        {children({
            count:counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
        })}
        {/* <ProductImage /> */}
        {/* <img className={styles.productImg} src={NoImage} alt="Coffe Mug"/> */}
        {/* <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy}/>
        productCard */}
        </div>
    </Provider>
    
  );
};


