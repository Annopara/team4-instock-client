import "./AllWarehousesPage.scss";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";

export const AllWarehousesPage = () => {
  return (
    <SearchHeader
      title="Warehouses"
      btnText="+ Add New Warehouse"
      navToTitle="AddWarehousePage"
    />
  );
};
