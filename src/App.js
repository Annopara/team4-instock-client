import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import WarehousesPage from './pages/WarehousesPage';
// import AddWarehousePage from './pages/AddWarehousePage';
// import WarehousePage from './pages/WarehousePage';
// import UpdateWarehousePage from './pages/UpdateWarehousePage';
// import InventoryPage from './pages/InventoryPage';
// import AddInventoryPage from './pages/AddInventoryPage';
// import InventoryItemPage from './pages/InventoryItemPage';
// import UpdateInventoryItemPage from './pages/UpdateInventoryItemPage';
// import Error404Page from './pages/Error404Page';


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
