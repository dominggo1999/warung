export const addItemToCart = (items, addedItem) => {
  const itemExist = items.find((item) => {
    return item.id === addedItem.id;
  });

  if(itemExist) {
    return items.map((item) => (item.id === addedItem.id
      ? { ...item, quantity: item.quantity + 1 }
      : item));
  }

  return [...items, {
    ...addedItem,
    quantity: 1,
  }];
};
