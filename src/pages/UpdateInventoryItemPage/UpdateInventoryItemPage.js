import './UpdateInventoryItemPage.scss';
import EditInventoryItemComponent from '../../components/InventoryUpdateForm/InventoryUpdateForm';
// remember to import as {} since it's not the default export

export const  UpdateInventoryItemPage =()=> {
  return (
    <section className="Update-inventory-item-section">
      <EditInventoryItemComponent />
    </section>
  );
}

// export default UpdateInventoryItemPage;
