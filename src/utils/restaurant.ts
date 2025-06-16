import { randomUUID } from "node:crypto";

export interface Restaurant {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  deliveryFee: number;
  deliveryTime: string;
  distanceKm: number;
  freeDeliveryMinOrder: number | null;
  hasFreeDelivery?: boolean;
  minOrderValue: number | null;
  status: 'open' | 'closed';
  cuisineType?: string;
  menu?: CategoryProps[];
}

export interface RestaurantData {
  deliveryAddress: string;
  openRestaurants: Restaurant[];
  closedRestaurants: Restaurant[];
} 

export interface ItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  isVegetarian?: boolean;
  isPromotion?: boolean;
  accompaniments?: typeof accompaniments;
  drinks?: typeof drinks;
  utensils?: typeof utensils;
  extras?: typeof extras;
}

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  items: ItemProps[];
}
 

export const accompaniments = [
  { id: randomUUID(), label: "shoyu" },
  { id: randomUUID(), label: "gengibre" },
  { id: randomUUID(), label: "wasabi" },
  { id: randomUUID(), label: "sem acompanhamentos" },
];

export const drinks = [
  {
    id: randomUUID(),
    label: "coca-cola",
    value: 5.0,
    quantity: 1,
  },
  {
    id: randomUUID(),
    label: "fanta laranja",
    value: 5.0,
    quantity: 1,
  },
  {
    id: randomUUID(),
    label: "guaraná antarctica",
    value: 5.0,
    quantity: 1,
  },
  {
    id: randomUUID(),
    label: "suco prats laranja",
    value: 5.0,
    quantity: 1,
  },
  {
    id: randomUUID(),
    label: "água sem gás",
    value: 3.0,
    quantity: 1,
  },
];

export const utensils = [
  {
    id: randomUUID(),
    label: "hashi",
    value: 0,
  },
  {
    id: randomUUID(),
    label: "garfo e faca descartável",
    value: 1.0,
  },
];

export const extras = [
  {
    id: randomUUID(),
    label: "biscoito da sorte",
    value: 2.0,
  },
  {
    id: randomUUID(),
    label: "rolinho primavera",
    value: 8.0,
  },
  {
    id: randomUUID(),
    label: "guioza",
    value: 6.0,
  },
];

export const data: RestaurantData = {
  deliveryAddress: "Rua Mandaguari, 198",
  openRestaurants: [
    {
      id: randomUUID(),
      name: "Matsuri Concept",
      logoUrl: "/assets/images/logo-loja-01.png",
      rating: 4.8,
      deliveryFee: 4.99,
      deliveryTime: "30-40 min",
      distanceKm: 2.5,
      freeDeliveryMinOrder: 35.00,
      hasFreeDelivery: true,
      minOrderValue: 15.00,
      status: "open",
      cuisineType: "Japonesa",
      menu: [
        {
          id: "1",
          name: "Entradas",
          description: "Pratos para começar",
          items: [
            {
              id: "1",
              name: "Guioza",
              description: "6 unidades de guioza frito",
              price: "R$ 18,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            },
            {
              id: "2", 
              name: "Rolinho Primavera",
              description: "4 unidades de rolinho primavera frito",
              price: "R$ 22,90",
              isVegetarian: true,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Subway - Avenida Center",
      logoUrl: "/assets/images/logo-loja-02.png",
      rating: 4.2,
      deliveryFee: 3.99,
      deliveryTime: "25-35 min",
      distanceKm: 1.8,
      freeDeliveryMinOrder: 30.00,
      hasFreeDelivery: true,
      minOrderValue: 20.00,
      status: "open",
      cuisineType: "Sanduíches",
      menu: [
        {
          id: "1",
          name: "Sanduíches",
          description: "Nossos sanduíches",
          items: [
            {
              id: "1",
              name: "Subway Club",
              description: "Peito de peru, presunto e roast beef",
              price: "R$ 24,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Burger King - Colombo",
      logoUrl: "/assets/images/logo-loja-03.png",
      rating: 4.5,
      deliveryFee: 5.99,
      deliveryTime: "35-45 min",
      distanceKm: 3.2,
      freeDeliveryMinOrder: 40.00,
      hasFreeDelivery: true,
      minOrderValue: 25.00,
      status: "open",
      cuisineType: "Hambúrguer",
      menu: [
        {
          id: "1",
          name: "Hambúrgueres",
          description: "Nossos hambúrgueres",
          items: [
            {
              id: "1",
              name: "Whopper",
              description: "Hambúrguer com queijo, alface, tomate, maionese, ketchup, picles e cebola",
              price: "R$ 29,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "McDonald's - Nova Centro",
      logoUrl: "/assets/images/logo-loja-04.png",
      rating: 4.3,
      deliveryFee: 4.50,
      deliveryTime: "20-30 min",
      distanceKm: 1.5,
      freeDeliveryMinOrder: 30.00,
      hasFreeDelivery: false,
      minOrderValue: 20.00,
      status: "open",
      cuisineType: "Hambúrguer",
      menu: [
        {
          id: "1",
          name: "Hambúrgueres",
          description: "Nossos hambúrgueres",
          items: [
            {
              id: "1",
              name: "Big Mac",
              description: "Dois hambúrgueres, alface, queijo, molho especial, cebola, picles e pão com gergelim",
              price: "R$ 27,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Pizza Hut - Shopping",
      logoUrl: "/assets/images/logo-loja-05.png",
      rating: 4.6,
      deliveryFee: 6.99,
      deliveryTime: "40-50 min",
      distanceKm: 4.0,
      freeDeliveryMinOrder: 45.00,
      hasFreeDelivery: false,
      minOrderValue: 30.00,
      status: "open",
      cuisineType: "Pizza",
      menu: [
        {
          id: "1",
          name: "Pizzas",
          description: "Nossas pizzas",
          items: [
            {
              id: "1",
              name: "Pizza Margherita",
              description: "Molho de tomate, mussarela, tomate e manjericão",
              price: "R$ 59,90",
              isVegetarian: true,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "China in Box",
      logoUrl: "/assets/images/logo-loja-06.png",
      rating: 4.7,
      deliveryFee: 5.50,
      deliveryTime: "35-45 min",
      distanceKm: 3.5,
      freeDeliveryMinOrder: 40.00,
      hasFreeDelivery: false,
      minOrderValue: 25.00,
      status: "open",
      cuisineType: "Chinesa",
      menu: [
        {
          id: "1",
          name: "Pratos Principais",
          description: "Nossos pratos principais",
          items: [
            {
              id: "1",
              name: "Yakissoba",
              description: "Macarrão com legumes e carne",
              price: "R$ 39,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Outback - Centro",
      logoUrl: "/assets/images/logo-loja-07.png",
      rating: 4.8,
      deliveryFee: 7.99,
      deliveryTime: "40-50 min",
      distanceKm: 3.8,
      freeDeliveryMinOrder: 45.00,
      hasFreeDelivery: false,
      minOrderValue: 30.00,
      status: "open",
      cuisineType: "Australiana",
      menu: [
        {
          id: "1",
          name: "Carnes",
          description: "Nossas carnes",
          items: [
            {
              id: "1",
              name: "Ribeye",
              description: "Bife de costela com 300g",
              price: "R$ 89,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Giraffas - Água Verde",
      logoUrl: "/assets/images/logo-loja-08.png",
      rating: 4.5,
      deliveryFee: 5.50,
      deliveryTime: "30-40 min",
      distanceKm: 2.5,
      freeDeliveryMinOrder: 35.00,
      hasFreeDelivery: false,
      minOrderValue: 22.00,
      status: "open",
      cuisineType: "Brasileira",
      menu: [
        {
          id: "1",
          name: "Pratos",
          description: "Nossos pratos",
          items: [
            {
              id: "1",
              name: "Filé à Parmegiana",
              description: "Filé à parmegiana com arroz e fritas",
              price: "R$ 42,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    },
    {
      id: randomUUID(),
      name: "Habbib's - Centro",
      logoUrl: "/assets/images/logo-loja-09.png",
      rating: 4.7,
      deliveryFee: 5.99,
      deliveryTime: "35-45 min",
      distanceKm: 3.0,
      freeDeliveryMinOrder: 38.00,
      hasFreeDelivery: false,
      minOrderValue: 25.00,
      status: "open",
      cuisineType: "Árabe",
      menu: [
        {
          id: "1",
          name: "Esfihas",
          description: "Nossas esfihas",
          items: [
            {
              id: "1",
              name: "Esfiha de Carne",
              description: "Esfiha de carne com queijo",
              price: "R$ 8,90",
              isVegetarian: false,
              accompaniments,
              drinks,
              utensils,
              extras
            }
          ]
        }
      ]
    }
  ],
  closedRestaurants: [
  {
    id: randomUUID(),
    name: "Outback - Batel",
    logoUrl: "/assets/images/logo-loja-07.png",
    rating: 4.9,
    deliveryFee: 8.99,
    deliveryTime: "45-55 min",
    distanceKm: 5.0,
    freeDeliveryMinOrder: 50.00,
    hasFreeDelivery: false,
    minOrderValue: 35.00,
    status: "closed",
    cuisineType: "Australiana",
    menu: [
      {
        id: "1",
        name: "Carnes",
        description: "Nossas carnes",
        items: [
          {
            id: "1",
            name: "Filé à Parmegiana",
            description: "Filé à parmegiana com arroz e fritas",
            price: "R$ 42,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          }
        ]
      }
    ]
  },
  {
    id: randomUUID(),
    name: "Habbib's - Centro",
    logoUrl: "/assets/images/logo-loja-09.png",
    rating: 4.7,
    deliveryFee: 5.99,
    deliveryTime: "35-45 min",
    distanceKm: 3.0,
    freeDeliveryMinOrder: 38.00,
    hasFreeDelivery: false,
    minOrderValue: 25.00,
    status: "closed",
    cuisineType: "Árabe",
    menu: [
      {
        id: "1",
        name: "Esfihas",
        description: "Nossas esfihas",
        items: [
          {
            id: "1",
            name: "Esfiha de Carne",
            description: "Esfiha de carne com queijo",
            price: "R$ 8,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          }
        ]
      }
    ]
  },
  {
    id: randomUUID(),
    name: "Outback - Centro",
    logoUrl: "/assets/images/logo-loja-07.png",
    rating: 4.8,
    deliveryFee: 7.99,
    deliveryTime: "40-50 min",
    distanceKm: 3.8,
    freeDeliveryMinOrder: 45.00,
    hasFreeDelivery: false,
    minOrderValue: 30.00,
    status: "closed",
    cuisineType: "Australiana",
    menu: [
      {
        id: "1",
        name: "Carnes",
        description: "Nossas carnes",
        items: [
          {
            id: "1",
            name: "Ribs on the Barbie",
            description: "Costela suína grelhada com molho especial",
            price: "R$ 89,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          },
          {
            id: "2",
            name: "Victoria's Filé Mignon",
            description: "Filé mignon grelhado com molho de champignon",
            price: "R$ 79,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          }
        ]
      }
    ]
  },
  {
    id: randomUUID(),
    name: "Giraffas - Água Verde",
    logoUrl: "/assets/images/logo-loja-08.png",
    rating: 4.5,
    deliveryFee: 5.50,
    deliveryTime: "30-40 min",
    distanceKm: 2.5,
    freeDeliveryMinOrder: 35.00,
    hasFreeDelivery: false,
    minOrderValue: 22.00,
    status: "closed",
    cuisineType: "Brasileira",
    menu: [
      {
        id: "1",
        name: "Pratos Executivos",
        description: "Nossos pratos executivos",
        items: [
          {
            id: "1",
            name: "Filé à Parmegiana",
            description: "Filé à parmegiana com arroz e fritas",
            price: "R$ 32,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          },
          {
            id: "2",
            name: "Frango Grelhado",
            description: "Frango grelhado com arroz e salada",
            price: "R$ 28,90",
            isVegetarian: false,
            accompaniments,
            drinks,
            utensils,
            extras
          }
        ]
      }
    ]
  }
  ]
}