import "./Warehouse.scss";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import { useState } from "react";


export const Warehouse = ({id, name, address, city, country, contactName, contactPhone, contactEmail}) => {


  return (
    <div className="warehouse__container">
      <div className="warehouse__flex">
      <div className="warehouse__wrapper">
      <div className="warehouse__name">
        <h3 className="warehouse__stacked-header">Warehouse</h3>
        <div className="warehouse__name-link">
          <Link to={`/warehouses/${id}`} className="warehouseList__link-anchor">
            {name}
          </Link>
          <img
            className="warehouse__name-link-image"
            src={Chevron}
            alt="chevron"
          ></img>
        </div>
      </div>
      <div className="warehouse__address">
        <h3 className="warehouse__stacked-header">Address</h3>
        <p className="warehouse__address-text">
          {address}, {city}, {country}
        </p>
      </div>
      </div>
      <div className="warehouse__wrapper">
        <div className="warehouse__contact">
          <h3 className="warehouse__stacked-header">Contact Name</h3>
          <p className="warehouse__text">{contactName}</p>
      </div>
      <div className="warehouse__contact-info">
        <h3 className="warehouse__stacked-header">Contact Information</h3>
        <p className="warehouse__text">{contactPhone}</p>
        <p className="warehouse__text">{contactEmail}</p>
      </div>
      </div>
      </div>

      <div className="warehouse__actions">
        <Link to="/" className="warehouse__link">
          <img
            src={DeleteIcon}
            alt="delete icon"
            className="warehouse__icon"
          />
        </Link>
        <Link to={`/warehouses/${id}/edit`} className="warehouse__link">
          <img src={EditIcon} alt="edit icon" className="warehouse__icon" />
        </Link>
      </div>
    </div>
  );
};
