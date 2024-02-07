import "./Warehouse.scss";

export const Warehouse = ({ warehouse }) => {
  const {
    id,
    name,
    address,
    city,
    country,
    contactName,
    contactPhone,
    contactEmail,
  } = warehouse;

  return (
    <div className="warehouseList__box">
      <div className="warehouseList__info-warehouse">
        <h3 className="warehouseList__mobile-header">Warehouse</h3>
        <div className="warehouseList__chevron-link">
          <Link to={`/warehouses/${id}`} className="warehouseList__link-anchor">
            {name}
          </Link>
          <img
            className="warehouseList__chevron-image"
            src={Chevron}
            alt="chevron"
          ></img>
        </div>
      </div>
      <div className="warehouseList__info-address">
        <h3 className="warehouseList__mobile-header">Address</h3>
        <p className="warehouseList__text">
          {address}, {city}, {country}
        </p>
      </div>
      <div className="warehouseList__info-contact">
        <h3 className="warehouseList__mobile-header">Contact Name</h3>
        <p className="warehouseList__text">{contactName}</p>
      </div>
      <div className="warehouseList__info-contact-info">
        <h3 className="warehouseList__mobile-header">Contact Information</h3>
        <p className="warehouseList__text">{contactPhone}</p>
        <p className="warehouseList__text">{contactEmail}</p>
      </div>

      <div className="warehouseList__actions">
        <Link to="/" className="warehouseList__link">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="warehouseList__icon"
            onClick={handleOpenModal}
          />
        </Link>
        <Link to={`/warehouses/${id}/edit`} className="warehouseList__link">
          <img src={EditIcon} alt="edit icon" className="warehouseList__icon" />
        </Link>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        warehouseId={id}
        warehouseName={name}
      />
    </div>
  );
};
