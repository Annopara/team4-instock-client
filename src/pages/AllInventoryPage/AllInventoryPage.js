import { SearchHeader } from '../../components/SearchHeader/SearchHeader';
import './AllInventoryPage.scss';
// remember to import as {} since it's not the default export
import {InventoryHeader} from '../../components/InventoryHeader/InventoryHeader'
import InventoryList from '../../components/InventoryList/InventoryList';

export const AllInventoryPage = () => {
  return (
    <section>
        <SearchHeader 
        title="Inventory"
        btnText="+ Add New Inventory"
        navToTitle="/inventory/addInventory"/>

       <InventoryHeader/>

    </section>
  )
}