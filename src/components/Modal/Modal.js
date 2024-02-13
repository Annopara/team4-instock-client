import "./Modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import Popup from "reactjs-popup";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";

export const Modal = ({ name, handleDelete }) => {
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
            <img
              className='popup__close'
              alt='pop close'
              onClick={close}
              src={closeIcon}
            />
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
