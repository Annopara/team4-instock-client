import "./DeleteWarehouse.scss";
import { deleteWarehouseEndpoint } from "../../utils/api";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close-24px.svg";

export const DeleteWarehouse = ({ id, fetchWarehouseData, name }) => {
  const [isErrorState, setIsErrorState] = useState(false);
  const [isSuccessState, setIsSuccessState] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`${deleteWarehouseEndpoint}/${id}`);
      console.log(response);
      setIsDeleting(false);
      setIsSuccessState(true);
      fetchWarehouseData();
    } catch (error) {
      setIsDeleting(false);
      setIsErrorState(true);
      console.error("Error deleting warehouse: ", error);
    }
  };

  const handleCancel = () => {
    setIsErrorState(false);
    setIsSuccessState(false);
    navigate("/warehouses");
  };

  return (
    <section className="deleteWarehouse">
      {isDeleting && <div>Deleting...</div>}
      {isErrorState && <div>There was an error deleting the warehouse</div>}
      {isSuccessState && <div>Warehouse deleted successfully</div>}

      <div className="deleteWarehouse__container">
        <img
          className="deleteWarehouse__icon"
          src={closeIcon}
          alt="close icon"
        />
        <div className="deleteWarehouse__flex">
          <h2 className="deleteWarehouse__header">
            Delete Washington warehouse?
          </h2>
          <p className="deleteWarehouse__text">
            Please confirm that you'd like to delete the {name} warehouse from
            the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="deleteWarehouse__button-container">
          <button className="button--cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="button--delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};
