import './UpdateInventoryItemPage.scss';
import EditInventoryItemComponent from '../../components/InventoryUpdateForm/InventoryUpdateForm';
// remember to import as {} since it's not the default export

function UpdateInventoryItemPage() {
  return (
    <section className="Update-inventory-item-section">
      <UpdateInventoryItemComponent />
    </section>
  );
}

export default UpdateInventoryItemPage;
