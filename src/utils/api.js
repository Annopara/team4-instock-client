export const API_URL = "http://localhost:8080";

// ALL WAREHOUSES
export const getWarehousesEndpoint = `${API_URL}/api/warehouses`;
console.log(getWarehousesEndpoint)
export const postWarehouseEndpoint = getWarehousesEndpoint;

// SINGLE WAREHOUSE
export const getWarehouseEndpoint = (id) => `${API_URL}/api/warehouses/${id}`;
export const patchWarehouseEndpoint = getWarehouseEndpoint;
export const deleteWarehouseEndpoint = getWarehouseEndpoint;

// ALL INVENTORY
export const getInventoryEndpoint = `${API_URL}/api/inventory`;
export const postInventoryEndpoint = getInventoryEndpoint;

// SINGLE WAREHOUSE STOCK OF A SINGLE INVENTORY ITEM
export const getInventoryItemEndpoint = (id) =>
  `${API_URL}/api/inventory/${id}`;
export const patchInventoryEndpoint = getInventoryItemEndpoint;
export const getAllInventoryEndpoint = getInventoryItemEndpoint;

// ALL WAREHOUSES STOCK OF A SINGLE INVENTORY ITEM
export const getWarehouseInventoryItemsEndpoint = (id) =>
  `${API_URL}/api/warehouses/${id}/inventories`;
