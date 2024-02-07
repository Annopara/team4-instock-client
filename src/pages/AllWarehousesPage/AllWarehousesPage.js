import "./AllWarehousesPage.scss";
import { WarehousesHeadings } from "../../components/WarehousesHeadings/WarehousesHeadings"; 
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";

export const AllWarehousesPage = () => {
  return (
      <section className="warehouses">
        <SearchHeader
          title="Warehouses"
          btnText="+ Add New Warehouse"
          navToTitle="AddWarehousePage"
        />
        <WarehousesHeadings />
    </section>
  );
};
