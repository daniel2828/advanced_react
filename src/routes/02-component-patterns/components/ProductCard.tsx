import styles from "../styles/styles.module.css";


import { useProduct } from "../hooks/useProduct";
import { createContext,useContext } from "react";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;




export const ProductCard = ({ product , children}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
        value={{counter,increaseBy,product}}
    >
    <div className={styles.productCard}>
        {children}
        {/* <ProductImage /> */}
        {/* <img className={styles.productImg} src={NoImage} alt="Coffe Mug"/> */}
        {/* <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy}/>
        productCard */}
        </div>
    </Provider>
    
  );
};


