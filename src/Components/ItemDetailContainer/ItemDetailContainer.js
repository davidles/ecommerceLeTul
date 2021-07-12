import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../Context/CartContext";
import { getFirestore } from "../../factory/index";

function ItemDetailContainer({ onAdd }) {
  const { product, setProduct } = useContext(CartContext)

    const { id } = useParams()

 

    useEffect(() => {
        setTimeout(() => {
          let item = ProductsList.find((x) => x.id === id);
          setProduct(item);
        }, 1000);
      }, []);

    return (
        <div>
            <div className="Cards-container">
             <ItemDetail product={product} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;