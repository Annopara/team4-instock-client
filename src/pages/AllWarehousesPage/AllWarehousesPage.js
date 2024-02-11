import "./AllWarehousesPage.scss";
import { WarehousesHeadings } from "../../components/WarehousesHeadings/WarehousesHeadings";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";
import { DeleteWarehouse } from "../../components/DeleteWarehouse/DeleteWarehouse";
import { useEffect, useState } from "react";
import axios from "axios";
import { getWarehousesEndpoint } from "../../utils/api";

export const AllWarehousesPage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchWarehouseData = async () => {
    try {
      console.log(getWarehousesEndpoint);
      const response = await axios.get(getWarehousesEndpoint);
      setIsLoading(false);
      setWarehouses(response.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchWarehouseData();
  }, []);

  if (isLoading) <div>Loading...</div>;
  if (isError) <div>There was an error fetching the data</div>;
  if (!isLoading && !isError && warehouses) {
    return (
      <section className="warehouses">
        <div className="warehouses__delete-container">
        <DeleteWarehouse
          fetchWarehouseData={fetchWarehouseData}
          warehouses={warehouses}
          setWarehouses={setWarehouses}
        />
        </div>
        <SearchHeader
          title="Warehouses"
          btnText="+ Add New Warehouse"
          navToTitle="/warehouses/addWarehouse"
        />
        <WarehousesHeadings />
        <WarehouseList warehouses={warehouses} />
      </section>
    );
  }
};
