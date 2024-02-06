import "./AllWarehousesPage.scss";
import { useNavigate } from "react-router-dom";
import { SearchHeader } from "../../components/SearchHeader/SearchHeader";

export const AllWarehousesPage = () => {

  return (
    <SearchHeader 
      pageTitle="Warehouses" 
      btnText="+ Add New Warehouse" 
      navToTitle="AddWarehousePage" />
  )
}