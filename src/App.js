import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { AllWarehousesPage } from "./pages/AllWarehousesPage/AllWarehousesPage";
import { AddWarehousePage } from "./pages/AddWarehousePage/AddWarehousePage";
import { WarehousePage } from "./pages/WarehousePage/WarehousePage";
import { UpdateWarehousePage } from "./pages/UpdateWarehousePage/UpdateWarehousePage";

import { AllInventoryPage } from "./pages/AllInventoryPage/AllInventoryPage";
import { AddInventoryItemPage } from "./pages/AddInventoryItemPage/AddInventoryItemPage";
import { InventoryItemPage } from "./pages/InventoryItemPage/InventoryItemPage";
import { UpdateInventoryItemPage } from "./pages/UpdateInventoryItemPage/UpdateInventoryItemPage";

import { Error404Page } from "./pages/Error404Page/Error404Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/warehouses" element={<AllWarehousesPage />} />
          <Route
            path="/warehouses/addWarehouse"
            element={<AddWarehousePage />}
          />
          <Route path="/warehouses/:warehouseID" element={<WarehousePage />} />
          <Route
            path="/warehouses/:warehouseID/edit"
            element={<UpdateWarehousePage />}
          />

          <Route path="/inventory" element={<AllInventoryPage />} />
          <Route
            path="/inventory/addInventory"
            element={<AddInventoryItemPage />}
          />
          <Route
            path="/inventory/:inventoryItemID"
            element={<InventoryItemPage />}
          />
          <Route
            path="/inventory/:inventoryItemID/edit"
            element={<UpdateInventoryItemPage />}
          />

          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
