import { SearchHeader } from '../../components/SearchHeader/SearchHeader';
import './AllInventoryPage.scss';
// remember to import as {} since it's not the default export
import {InventoryHeader} from '../../components/InventoryHeader/InventoryHeader'

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