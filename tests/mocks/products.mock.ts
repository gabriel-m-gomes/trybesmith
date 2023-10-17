const bodySuccessful = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

const bodyFail = {
   name: "",
  price: "",
  orderId: 0
}

const AllProducts = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    orderId: 1
  },
];



export default {
  bodySuccessful,
  bodyFail,
  AllProducts,
}