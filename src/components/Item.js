import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleAddToCart(){
    setInCart(!inCart)
    console.log("add")
  }
  const className = inCart ? "in-cart" : "";
  const buttonName = inCart?   "Remove From Cart" :  "Add to Cart";
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{buttonName}</button>
    </li>
  );
}

export default Item;
