import "./Inventory.scss";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

export const Inventory = ({
  id,
  item_name,
  description,
  category,
  status,
  quantity,
  created_at, 
  updated_at, 
  //include warehouse ID somewhere here
  //come back and tweak this code so it pushes the right elements - you will need to go into 'Inventory' and add warehouse ID too
}) => {
  return (
    <div className="inventory__container">
      <div className="inventory__flex">
        <div className="inventory__wrapper">
          <div className="inventory__name">
            <h3 className="inventory__stacked-header">inventory item</h3>
            <div className="inventory__name-link">
              <Link to={`/inventories/${id}`} className="inventory__name-link-anchor">
                {item_name}
              </Link>
              <img
                className="inventory__name-link-image"
                src={Chevron}
                alt="chevron"/>
            </div>
          </div>
          <div className="inventory__category">
            <h3 className="inventory__stacked-header">category</h3>
            <p className="inventory__category-text">
            , {category}, {status}
            </p>
          </div>
        </div>
      
        <div className="inventory__wrapper">
          <div className="inventory__contact">
            <h3 className="inventory__stacked-header">Contact Name</h3>
            <p className="inventory__text">{quantity}</p>
          </div>
          <div className="inventory__contact-info">
            <h3 className="inventory__stacked-header">Contact Information</h3>
            <p className="inventory__text">{created_at}</p>
            <p className="inventory__text">{updated_at}</p>
          </div>
        </div>
      </div>

      <div className="inventory__actions">
        <Link to="/" className="inventory__link">
          <img src={DeleteIcon} alt="delete icon" className="inventory__icon" />
        </Link>
        <Link to={`/inventories/${id}/edit`} className="inventory__link">
          <img src={EditIcon} alt="edit icon" className="inventory__icon" />
        </Link>
      </div>
    </div>
  );
};