import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../Context/CartContext";
import { getFirestore } from "../../factory/index";

function ItemDetailContainer({ onAdd }) {
  const { setItems  } = useContext(CartContext);

 const { id } = useParams()



  useEffect(() => {   
    const itemID = id
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(itemID);
    item
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("Item no encontrado");
     
          return;
        }
        console.log("Item encontrado");
        setItems([{ id: doc.id, ...doc.data() }]);

      })
      .catch((error) => {
        console.log(error);
  
      });
  }, [id]);

  

  return (
    <div>
      <div className="Cards-container">
      <ItemDetail onAdd={onAdd} />
      
        
      </div>
    </div>
  );
}

export default ItemDetailContainer;