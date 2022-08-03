export const updateSaleStatus = async (newStatus) => (
  {
      type: "UPDATE_SALE_STATUS",
      newStatus:   newStatus
  }
);
export const resetSaleStatus = () => (
  {
      type: "RESET_SALE_STATUS"
  }
);

