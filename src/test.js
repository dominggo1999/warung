const a = [
  {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
  },
  {
    id: 2,
    name: 'Blue Beanie',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    price: 18,
  },
];

const x = {
  id: 1,
  name: 'Brown Brim',
  imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  price: 25,
};

const isExist = a.find((item) => {
  return item.id === x.id;
});

console.log(isExist);
