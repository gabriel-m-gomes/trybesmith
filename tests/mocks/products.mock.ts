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

const bodyEmptyName = {
  name: "",
  price: "30 peças de ouro",
  orderId: 4
}

const bodyNameTypeof = {
  name: 1,
  price: "30 peças de ouro",
  orderId: 4
}

const bodyNameLength = {
  name: "sa",
  price: "30 peças de ouro",
  orderId: 4
}

const bodyEmptyPrice = {
  name: "Machado",
  price: "",
  orderId: 4
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
  bodyEmptyName,
  bodyEmptyPrice,
  bodyNameTypeof,
  bodyNameLength,
}