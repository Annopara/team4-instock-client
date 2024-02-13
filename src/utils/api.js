// const API_URL = process.env.REACT_APP_API;
const API_URL = process.env.REACT_APP_API_URL;

// ALL WAREHOUSES
export const getWarehousesEndpoint = `${API_URL}/api/warehouses`;
export const postWarehouseEndpoint = getWarehousesEndpoint;

// SINGLE WAREHOUSE
export const getWarehouseEndpoint = (id) => `${API_URL}/api/warehouses/${id}`;
export const patchWarehouseEndpoint = getWarehouseEndpoint;

// ALL INVENTORY
export const getInventoriesEndpoint = `${API_URL}/api/inventories`;
export const postInventoryEndpoint = getInventoriesEndpoint;

// SINGLE WAREHOUSE STOCK OF A SINGLE INVENTORY ITEM
export const getInventoryItemEndpoint = (id) =>
  `${API_URL}/api/inventories/${id}`;
export const patchInventoryEndpoint = getInventoryItemEndpoint;
export const getAllInventoryEndpoint = getInventoryItemEndpoint;

// ALL WAREHOUSES STOCK OF A SINGLE INVENTORY ITEM
export const getWarehouseInventoryItemsEndpoint = (id) =>
  `${API_URL}/api/warehouses/${id}/inventories`;
