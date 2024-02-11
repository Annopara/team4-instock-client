
import "./InventoryList.scss";
import { Inventory } from "../Inventory/Inventory";
import { getInventoriesEndpoint } from "../../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";


export const InventoryList = () => {

  const [inventoryList, setInventoryList] = useState([]);

  const [display, setDisplay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      axios.get(getInventoriesEndpoint)
        .then(response => {
          setInventoryList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const showModal = (item) => {
      setSelectedItem(item);
      setDisplay(true);
    };
  
    const cancelModal = () => {
      setDisplay(false);
      setSelectedItem(null);
    };
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
                    warehouse_id={inventory.warehouse_id}
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


