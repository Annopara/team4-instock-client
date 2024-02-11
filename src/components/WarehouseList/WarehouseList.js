import "./WarehouseList.scss";

import { Warehouse } from "../Warehouse/Warehouse";

export const WarehouseList = ({warehouses}) => {
 

  return (
    <div className="warehouse-list">
      <ul className="warehouse-list__ul">
        {warehouses &&
          warehouses.map((warehouse) => {
            return (
              <li className="warehouse-list__li">
                {
                  <Warehouse
                    id={warehouse.id}
                    name={warehouse.warehouse_name}
                    address={warehouse.address}
                    city={warehouse.city}
                    country={warehouse.country}
                    contactName={warehouse.contact_name}
                    contactPhone={warehouse.contact_phone}
                    contactEmail={warehouse.contact_email}
                  />
                }
              </li>
            );
          })}
      </ul>
    </div>
  );
};
