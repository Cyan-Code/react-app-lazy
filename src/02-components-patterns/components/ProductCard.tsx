import React, { useState } from 'react';
import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductCard = () => {

  const [counter, setCounter] = useState(0);

  const incriseBy = (value:number) => {
    setCounter(prev => Math.max(prev + value, 0))
  }

  return (
  <div className = { style.productCard }>
    <img className={ style.productImg } src="./coffee-mug.png" alt="Coffee mug" />
    {/* <img className={ style.productImg } src={noImage} alt="Coffee mug" /> */}
    <span className={style.productDescription}>Coffee Mug</span>

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
