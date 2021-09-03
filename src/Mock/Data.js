import curry from '../assets/curry.jpg';
import karahai from '../assets/karahai.jpg';
import kofta from '../assets/kofta.jpg';

const UserData = [
  {
    id: '1',
    name: 'Curry',
    price: '150 ',
    resturantName: 'Kitchen',
    img: curry,
    type: 'Curry',
    addToCart: 'Add To Cart',
  },
  {
    id: '2',
    name: 'Kofta',
    price: '220 ',
    type: 'Curry',
    resturantName: 'Kitchen',
    img: kofta,
    addToCart: 'Add To Cart',
  },
  {
    id: '3',
    name: 'Karhai',
    price: '250 ',
    resturantName: 'Kitchen',
    img: karahai,
    type: 'Curry',
    addToCart: 'Add To Cart',
  },
  // {
  //   id: '4',
  //   name: 'Naan',
  //   price: '12 ',
  //   resturantName: 'Tandoor',
  //   img: karahai,
  //   type: 'Roti',
  //   addToCart: 'Add To Cart',
  // },
];

export default UserData;
