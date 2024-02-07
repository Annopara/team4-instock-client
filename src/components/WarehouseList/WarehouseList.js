import './WarehouseList.scss';

import { Warehouse } from "../Warehouse/Warehouse";
import { getWarehousesEndpoint } from "../../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";

export const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isErrorState, setIsErrorState] = useState(false);

  //   useEffect(() => {
  //     const fetchWarehouseData = async () => {
  //       try {
  //         const response = await axios.get(getWarehousesEndpoint);
  //         setIsLoading(false);
  //         setWarehouses(response.data);
  //       } catch (error) {
  //         setIsLoading(false);
  //         setIsErrorState(true);
  //         console.error("Error fetching data: ", error);
  //       }
  //     };
  //     fetchWarehouseData();
  //   }, []);

  if (isLoading) <div>Loading...</div>;
  if (isErrorState) <div>There was an error fetching the data</div>;
  const warehousesTemp = [
    {
      id: 1,
      warehouse_name: "Warehouse 1",
      address: "123 Warehouse St",
      city: "Warehouse City",
      country: "Warehouse Country",
      contact_name: "Warehouse Contact",
      contact_phone: "123-456-7890",

      contact_email: "warehouse@email.com",
    },
  ];

  return (
    <div className="warehouse-list__container">
      <ul>
        {warehousesTemp.map((warehouse) => {
          return (
            <li className="warehouse">
              {
                <Warehouse
                  // id={warehouse.id}
                  // name={warehouse.warehouse_name}
                  // address={warehouse.address}
                  // city={warehouse.city}
                  // country={warehouse.country}
                  // contactName={warehouse.contact_name}
                  // contactPhone={warehouse.contact_phone}
                  // contactEmail={warehouse.contact_email}
                  //fetchWarehouseData={fetchWarehouseData}
                  id="1"
                  name="Warehouse 1"
                  address="123 Warehouse St"
                  city="Warehouse City"
                  country="Warehouse Country"
                  contactName="Warehouse Contact"
                  contactPhone="123-456-7890"
                  contactEmail="warehouse@email.com"
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};
