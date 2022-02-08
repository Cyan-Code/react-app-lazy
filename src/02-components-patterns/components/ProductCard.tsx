import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';


interface Props {
  product: Product
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ( {product}:Props ) => {

  const {incriseBy, counter} = useProduct();

  return (
  <div className = { style.productCard }>
    <img className={ style.productImg } src={product.img ? product.img : noImage } alt="Coffee mug" />
    <span className={style.productDescription}>{ product.title }</span>

    <div className={ style.buttonsContainer }>
      <button
        onClick={()=>incriseBy(-1)}
        className={ style.buttonMinus }> - </button>
      <div className={style.countLabel}> {counter} </div>
      <button
        onClick={()=>incriseBy(+1)}
        className={ style.buttonAdd }> + </button>
    </div>
  </div>
  );
};
