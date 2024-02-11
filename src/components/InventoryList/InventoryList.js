
import "./InventoryList.scss";
import { Inventory } from "../Inventory/Inventory";
import { getInventoriesEndpoint } from "../../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";


export const InventoryList = () => {
  const [inventories, setinventories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isErrorState, setIsErrorState] = useState(false);

  const fetchinventoryData = async () => {
    try {
      console.log(getInventoriesEndpoint);
      const response = await axios.get(getInventoriesEndpoint);
      setIsLoading(false);
      setinventories(response.data);
    } catch (error) {
      setIsLoading(false);
      setIsErrorState(true);
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchinventoryData();
  }, []);

  if (isLoading) <div>Loading...</div>;
  if (isErrorState) <div>There was an error fetching the data</div>;

  return (
    <div className="inventory-list">
      <ul className="inventory-list__ul">
        {inventories &&
          inventories.map((inventory) => {
            return (
              <li className="inventory-list__li">
                {
                  <Inventory
                    id={inventory.id}
                    item_name={inventory.item_name}
                    description={inventory.description}
                    category={inventory.category}
                    status={inventory.status}
                    quantity={inventory.quantity}
                    created_at={inventory.created_at}
                    updated_at={inventory.contact_email}
                    fetchinventoryData={fetchinventoryData}
                  />
                }
              </li>
            );
          })}
      </ul>
    </div>
  );
};




// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
// import editIcon from '../../assets/icons/edit-24px.svg';
// import rightIcon from '../../assets/icons/chevron_right-24px.svg';
// import './InventoryList.scss';


// const InventoryList = () => {
//     const [inventoryList, setInventoryList] = useState([]);
//     const [display, setDisplay] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
  
//     useEffect(() => {
//       axios.get('http://localhost:8088/inventory')
//         .then(response => {
//           setInventoryList(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }, []);
  
//     const showModal = (item) => {
//       setSelectedItem(item);
//       setDisplay(true);
//     };
  
//     const cancelModal = () => {
//       setDisplay(false);
//       setSelectedItem(null);
//     };
  
  
  
//     return (
//         <>
//      <div className="inventory-list">
//       <ul className="inventory-list__ul">
//         {inventory &&
//           inventory.map((inventory) => {
//             return (
//               <li className="inventory-list__li">
//                 {
//                   <Inventory
//                     id={inventory.id}
//                     name={inventory.inventory_name}
//                     address={inventory.address}
//                     city={inventory.city}
//                     country={inventory.country}
//                     contactName={inventory.contact_name}
//                     contactPhone={inventory.contact_phone}
//                     contactEmail={inventory.contact_email}
//                     fetchinventoryData={fetchinventoryData}
//                   />
//                 }
//               </li>
//             );
//           })}
//       </ul>
//     </div>

        
//   <div className="inventoryList">
//     <div className="inventoryList__form">
//       <h1 className="inventoryList__title">Inventory</h1>
//       <div className="inventoryList__form-container">
//         <form className="inventoryList__form-sub">
//           <input className="inventoryList__search" type="search" placeholder="Search..." />
//           <Link to="/inventory/add">
//             <button className="inventoryList__button">+ Add New Item</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//     <div className="inventoryList__list-divider" />
//     <div className="inventoryList__category-box">
//       <div className="inventoryList__categories">
//         <div className="inventoryList__category-title">INVENTORY ITEM</div>
//         <div className="inventoryList__category-title">CATEGORY</div>
//         <div className="inventoryList__category-title">STATUS</div>
//         <div className="inventoryList__category-title">QTY</div>
//         <div className="inventoryList__category-title">inventory</div>
//         <div className="inventoryList__category-title">ACTIONS</div>
//       </div>
//     </div>
//     {inventoryList.map((item) => (
//       <div key={item.id} className="inventoryList__item-row">
//         <div className="inventoryList__item-detail">{item.item_name}</div>
//         <div className="inventoryList__item-detail">{item.category}</div>
//         <div className="inventoryList__item-detail">{item.status}</div>
//         <div className="inventoryList__item-detail">{item.quantity}</div>
//         <div className="inventoryList__item-detail">{item.inventory_name}</div>
//         <div className="inventoryList__actions-detail">
//           <Link to={`/inventories/${item.id}/edit`}><img src={editIcon} alt="Edit" /></Link>
//           <button onClick={() => showModal(item)}><img src={deleteIcon} alt="Delete" /></button>
//           <Link to={`/inventories/${item.id}`}><img src={rightIcon} alt="Details" /></Link>
//         </div>
//       </div>
//     ))}
//   </div>
// </>
        
//         </>
//       );
//     };
    
//     export default InventoryList;
