import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../Context/CartContext";
import { getFirestore } from "../../factory/index";

function ItemDetailContainer({ onAdd }) {
  const { product, setProduct,  items, setItems  } = useContext(CartContext);

 const { id } = useParams()

  const [loading, setLoading] = useState(true);

  useEffect(() => {   
 
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc('espLMxFuDEfMbwZkTA6l');
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item no encontrado");
          setLoading(false);
          return;
        }
        console.log("Item encontrado");
        setProduct([{ id: doc.id, ...doc.data() }]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  
console.log(items)
  return (
    <div>
      <div className="Cards-container">
      <ItemDetail items={product} onAdd={onAdd} />
        
      </div>
    </div>
  );
}

export default ItemDetailContainer;