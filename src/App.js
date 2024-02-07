import './App.scss';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
          <Routes>
            <Route path="/warehouses" element={<WarehousesPage />} />
            <Route path="/warehouses/addWarehouse" element={<AddWarehousePage />} />
            <Route path="/warehouses/:warehouseID" element={<WarehousePage />} />
            <Route path="/warehouses/:warehouseID/edit" element={<UpdateWarehousePage/>} />
            
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/addInventory" element={<AddInventoryPage />} />
            <Route path="/inventory/:inventoryItemID" element={<InventoryItemPage />} />
            <Route path="/inventory/:inventoryItemID/edit" element={<UpdateInventoryItemPage />} />
            
            <Route path="*" element={<Error404Page />} />
           </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
