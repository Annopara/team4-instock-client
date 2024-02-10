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
      warehouse_name: "Manhattan",
      address: "503 Broadway",
      city: "New York",
      country: "USA",
      contact_name: "Parmin Aujila",
      contact_phone: "1-(629)-555-0129",

      contact_email: "paujila@instock.com",
    },
  ];

  return (
    <div className="warehouse-list">
      <ul className="warehouse-list__ul">
        {warehousesTemp.map((warehouse) => {
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
                  //fetchWarehouseData={fetchWarehouseData}
 
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};
