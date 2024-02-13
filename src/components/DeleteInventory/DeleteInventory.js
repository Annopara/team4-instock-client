import axios from "axios";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
const API_URL = process.env.REACT_APP_API;

export const DeleteInventory = ({ id, fetchWarehouseData, item_name }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`${API_URL}/api/inventories/${id}`);
      fetchWarehouseData();
    } catch (error) {
      console.log("Error deleting warehouse: ", error);
    } finally {
      // Add a delay before refreshing the page
      setTimeout(() => {
        window.location.reload(true); // Hard refresh the page
      }, 1000);
    }
  };

  return <Modal item_name={item_name} handleDelete={handleDelete} />;
};
