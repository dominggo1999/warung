import { FaIgloo } from 'react-icons/fa';

export const addItemToCart = (items, addedItem) => {
  // Cek apakah item sudah ada di cart atau belum
  const itemExist = items.find((item) => {
    return item.id === addedItem.id;
  });

  // kalau item ada
  if(itemExist) {
    // loop array, dan cari posisi item
    return items.map((item) => (item.id === addedItem.id
      // kalau id item yang dimaksud sudah ditemukan tambahkan jumlahnya 1
      ? { ...item, quantity: item.quantity + 1 }
      // Kalau bukan yang dicari biarkan tetap
      : item));
  }

  // kalau item belum ada maka item ditambahkan ke list item yang sudah ada
  return [...items, {
    ...addedItem,
    quantity: 1,
  }];
};

export const removeFromCart = (items, removedItem) => {
  // Item pasti ada di cart items
  // kalau qty nya tinggal satu
  if(removedItem.quantity === 1) {
    return items.filter((item) => item.id !== removedItem.id);
  }

  return items.map((item) => (item.id === removedItem.id
    // kurangi jumlah nya 1
    ? { ...item, quantity: item.quantity - 1 }
    // Kalau bukan yang dicari biarkan tetap
    : item));
};
