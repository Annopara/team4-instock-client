import Warehouse from "./Warehouse/Warehouse";
import { getWarehousesEndpoint } from "../../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";

export const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorState, setIsErrorState] = useState(false);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(getWarehousesEndpoint);
        setIsLoading(false);
        setWarehouses(response.data);
      } catch (error) {
        setIsLoading(false);
        setIsErrorState(true);
        console.error("Error fetching data: ", error);
      }
    };
    fetchWarehouseData();
  }, []);

  isLoading ? <div>Loading...</div> : null;
  isErrorState ? <div>Error fetching data</div> : null;

  return (
    <div className="warehouse-list">
      <ul>
        {warehouses.map((warehouse) => {
          return (
            <li className="warehouse" key={warehouse.id}>
              {
                <Warehouse
                  //   id={warehouse.id}
                  //   name={warehouse.warehouse_name}
                  //   address={warehouse.address}
                  //   city={warehouse.city}
                  //   country={warehouse.country}
                  //   contactName={warehouse.contact_name}
                  //   contactPhone={warehouse.contact_phone}
                  //   contactEmail={warehouse.contact_email}
                  //   fetchWarehouseData={fetchWarehouseData}
                  id="3"
                  name="Warehouse 3"
                  address="1234 Warehouse St."
                  city="Warehouse City"
                  country="Warehouse Country"
                  contactName="Warehouse Contact"
                  contactPhone="123-456-7890"
                  contactEmail="warehouse@email.com"
                  fetchWarehouseData={fetchWarehouseData}
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};
