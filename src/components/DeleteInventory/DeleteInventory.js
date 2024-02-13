import "./DeleteWarehouse.scss";
import axios from "axios";
import { useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";
import Popup from "reactjs-popup";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
const API_URL = process.env.REACT_APP_API;

export const DeleteWarehouse = ({ id, fetchWarehouseData, name }) => {
  const [isErrorState, setIsErrorState] = useState(false);
  const [isSuccessState, setIsSuccessState] = useState(false);
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

  return (
    <section className='deleteWarehouse'>
      <Popup
        trigger={
          <img src={DeleteIcon} alt='delete icon' className='warehouse__icon' />
        }
        modal
        nested
      >
        {(close) => (
          <div className='popup'>
            <img className='popup__close' onClick={close} src={closeIcon} />
            <div className='popup__flex'>
              <h2 className='popup__title'>Delete {name} warehouse?</h2>
              <p className='popup__content'>
                Please confirm that you'd like to delete the {name} warehouse
                from the list of warehouses. You won't be able to undo this
                action.
              </p>
            </div>
            <div className='popup__actions'>
              <button
                className='popup__button--cancel'
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </button>
              <button className='popup__button--delete' onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        )}
      </Popup>
    </section>
  );
};
