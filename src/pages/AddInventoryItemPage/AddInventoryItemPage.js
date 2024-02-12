import './AddInventoryItemPage.scss';
import AddInventoryItemComponent from '../../components/AddInventory/AddInventoryItem';
// remember to import as {} since it's not the default export

export const AddInventoryItemPage = () => {
  return (
    <section className="add-inventory-item-section">
      <AddInventoryItemComponent />
    </section>
  );
};

// export default AddInventoryItemPage;
