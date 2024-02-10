import "./AllWarehousesPage.scss";
import { WarehousesHeadings } from "../../components/WarehousesHeadings/WarehousesHeadings";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";
import { WarehouseList } from "../../components/WarehouseList/WarehouseList";

export const AllWarehousesPage = () => {

  return (
    <section className="warehouses">
      <SearchHeader
        title="Warehouses"
        btnText="+ Add New Warehouse"
        navToTitle="/warehouses/addWarehouse"
      />
      <WarehousesHeadings />
      <WarehouseList />
    </section>
  );
};
