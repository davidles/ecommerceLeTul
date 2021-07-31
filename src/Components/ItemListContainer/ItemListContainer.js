import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getFirestore } from "../../factory/index";
import './ItemListContainer.css'
import CartContext from '../../Context/CartContext';


function ItemListContainer() {

    const { category } = useParams();

    const { setCategories } = useContext(CartContext)

    const obtenerDatos =  () => {
      if(!category){
        const db = getFirestore();
        const itemCollection = db.collection('items');
         itemCollection
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              return;
            }
   
            setCategories(querySnapshot.docs.map((doc) => {
             const element = {
                id: doc.id,
                ...doc.data()
              }    
             return element
            }));
            
          
          })
          .catch(error => {
            console.log(error);
          });
      }else{            
        const db = getFirestore();
        const itemCollection = db.collection('items');
          const categoryId = itemCollection.where('category', '==', category)
          categoryId
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              return;
            }
            setCategories(querySnapshot.docs.map((doc) => {
              const elemento = {
                 id: doc.id,
                 ...doc.data()
               }      
              return elemento
             }));
          })
          .catch(error => {
            console.log(error);
          });
      }
      
  } 

    useEffect(() => obtenerDatos(), []);

    return (
        <div>
            <h2 className="title">Catálogo de {category || "Productos"}</h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
