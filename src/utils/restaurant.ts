export interface RestaurantProps {
  id: string;
  name: string;
  logoUrl: string;
  slug: string;
  rating: number;
  deliveryFee: number;
  deliveryTime: string;
  distance: number;
  freeDeliveryMinOrder: number | null;
  closingTime: string;
  minOrderValue: number | null;
  isFavorite: boolean;
  hasFreeDelivery: boolean;
  status: 'open' | 'closed';
  cuisineType: string;
  menus: MenuProps[];
}

export interface MenuProps {
  id: string;
  name: string;
  description: string;
  products: ProductProps[];
}

export interface ProductProps {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  isVegetarian: boolean;
  isSpicy: boolean;
  imageUrl: string | null;
  observation: string | null;
  additionals: ProductAdditionalProps[];
}

export interface ProductAdditionalProps {
  id: string;
  productId: string;
  title: string;
  quantity: number;
  main: boolean;
  type: 'unique' | 'multiple' | 'upsell';
  isRequired: boolean;
  options: ProductAdditionalOptionProps[];
}

export interface ProductAdditionalOptionProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  quantity: number;
}

export interface CheckoutProps {
  id: string;
  restaurantId: string;
  products: ProductProps[];
}


const guioza: ProductProps = {
  id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  restaurantId: 'e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b',
  name: 'Guioza',
  description: 'Delicious Japanese dumplings filled with meat and vegetables.',
  isVegetarian: true,
  isSpicy: false,
  imageUrl: '/assets/images/loja/item/main-image.jpg',
  price: 0,
  discount: 0,
  quantity: 0,
  observation: null,
  additionals: [
    {
      id: '8d9e6679-7425-40de-944b-e07fc1f90ae8',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'qual o tamanho?',
      quantity: 1,
      type: 'unique',
      isRequired: true,
      main: true,
      options: [
        {
          id: '9e0f6679-7425-40de-944b-e07fc1f90ae9',
          title: 'pequeno',
          price: 15.90,
          discount: 5.00,
          quantity: 1
        },
        {
          id: '0f1a6679-7425-40de-944b-e07fc1f90af0',
          title: 'médio',
          price: 18.90,
          discount: 0,
          quantity: 1
        },
        {
          id: '1a2b6679-7425-40de-944b-e07fc1f90af1',
          title: 'grande',
          price: 22.90,
          discount: 0,
          quantity: 1
        }
      ]
    },
    {
      id: '2b3c6679-7425-40de-944b-e07fc1f90af2',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'acompanhamentos',
      quantity: 3,
      type: 'multiple',
      isRequired: true,
      main: false,
      options: [
        {
          id: '3c4d6679-7425-40de-944b-e07fc1f90af3',
          title: 'shoyu',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '4d5e6679-7425-40de-944b-e07fc1f90af4',
          title: 'gengibre',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '5e6f6679-7425-40de-944b-e07fc1f90af5',
          title: 'wasabi',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '6f7a6679-7425-40de-944b-e07fc1f90af6',
          title: 'sem acompanhamentos',
          price: 0,
          discount: 0,
          quantity: 1
        }
      ]
    },
    {
      id: '7a8b6679-7425-40de-944b-e07fc1f90af7',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'vai querer bebida?',
      quantity: -1,
      type: 'upsell',
      isRequired: false,
      main: false,
      options: [
        {
          id: '8b9c6679-7425-40de-944b-e07fc1f90af8',
          title: 'coca-cola',
          price: 5,
          discount: 0,
          quantity: 1
        },
        {
          id: '9c0d6679-7425-40de-944b-e07fc1f90af9',
          title: 'fanta laranja',
          price: 5,
          discount: 0,
          quantity: 1
        },
        {
          id: '0d1e6679-7425-40de-944b-e07fc1f90afa',
          title: 'guaraná antárctica',
          price: 5,
          discount: 0,
          quantity: 1
        },
        {
          id: '1e2f6679-7425-40de-944b-e07fc1f90afb',
          title: 'suco prats laranja',
          price: 6,
          discount: 0,
          quantity: 1
        },
        {
          id: '2f3a6679-7425-40de-944b-e07fc1f90afc',
          title: 'água sem gás',
          price: 3,
          discount: 0,
          quantity: 1
        }
      ]
    },
    {
      id: '3a4b6679-7425-40de-944b-e07fc1f90afd',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'precisa de talher?',
      quantity: 1,
      type: 'unique',
      isRequired: false,
      main: false,
      options: [
        {
          id: '4b5c6679-7425-40de-944b-e07fc1f90afe',
          title: 'hashi',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '5c6d6679-7425-40de-944b-e07fc1f90aff',
          title: 'garfo e faca descartáveis',
          price: 1,
          discount: 0,
          quantity: 1
        }
      ]
    },
    {
      id: '6d7e6679-7425-40de-944b-e07fc1f90b00',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'mais alguma coisa?',
      quantity: 2,
      type: 'multiple',
      isRequired: false,
      main: false,
      options: [
        {
          id: '7e8f6679-7425-40de-944b-e07fc1f90b01',
          title: 'biscoito da sorte',
          price: 2,
          discount: 0,
          quantity: 1
        },
        {
          id: '8f9a6679-7425-40de-944b-e07fc1f90b02',
          title: 'rolinhos primavera',
          price: 8,
          discount: 0,
          quantity: 1
        },
        {
          id: '9a0b6679-7425-40de-944b-e07fc1f90b03',
          title: 'guioza',
          price: 6,
          discount: 0,
          quantity: 1
        }
      ]
    }
  ]
}

const temaki: ProductProps = {
  id: 'ba322073-71fd-4974-a45c-9ce008e5710f',
  restaurantId: 'e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b',
  name: 'Temaki Salmão',
  description: 'Cone de alga nori recheado com arroz, salmão fresco e cream cheese.',
  isVegetarian: false,
  isSpicy: true,
  imageUrl: '/assets/images/loja/item/main-image.jpg',
  price: 24.90,
  observation: 'tira cebola, por favor',
  discount: 0,
  quantity: 0,
  additionals: [
    {
      id: 'ca4d71ff-d3f5-4c19-8556-5a3a409017e3',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'acompanhamentos',
      quantity: 2,
      type: 'multiple',
      isRequired: true,
      main: false,
      options: [
        {
          id: 'ca4d71ff-d3f5-4c19-8556-5a3a409017e3',
          title: 'shoyu',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '0f4587a4-a45b-4b30-968d-42ceaad6938d',
          title: 'gengibre',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '90f3105a-d1ac-46f4-ac59-915b1c3c6bff',
          title: 'wasabi',
          price: 0,
          discount: 0,
          quantity: 1
        }
      ]
    }
  ]
}

const sushiCombo: ProductProps = {
  id: '7bf1c5fc-68c9-4609-9646-c9fca6c7a27f',
  restaurantId: 'e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b',
  name: 'Combo Sushi Premium',
  description: '12 peças de sushi variado com salmão, atum e camarão.',
  isVegetarian: false,
  isSpicy: false,
  observation: null,
  imageUrl: '/assets/images/loja/item/main-image.jpg',
  price: 45.90,
  quantity: 0,
  discount: 5.00,
  additionals: [
    {
      id: '23c4f14c-1b7b-466e-9bad-1945005bcbc2',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'acompanhamentos',
      quantity: 1,
      type: 'multiple',
      isRequired: true,
      main: false,
      options: [
        {
          id: '1e87d4d3-e12d-4c8b-9eb5-dc2b815e92cf',
          title: 'shoyu',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '2ca41af3-2220-4c88-8d26-5b30df8d0992',
          title: 'gengibre',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '32fce54c-a42c-4fe7-bd6a-2c73bf55f371',
          title: 'wasabi',
          price: 0,
          discount: 0,
          quantity: 1
        }
      ]
    }
  ]
}

const ramen: ProductProps = {
  id: '558d58b4-65d2-475d-8795-823eaa49d8b8',
  restaurantId: 'e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b',
  name: 'Ramen Tonkotsu',
  description: 'Macarrão em caldo de porco cremoso com chashu, ovo marinado e cebolinha.',
  isVegetarian: false,
  isSpicy: false,
  observation: null,
  imageUrl: '/assets/images/loja/item/main-image.jpg',
  price: 32.90,
  discount: 0,
  quantity: 0,
  additionals: [
    {
      id: 'bf6bd4f5-555f-48ef-823a-a05ca0c0d15b',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'tempero',
      quantity: 1,
      type: 'unique',
      isRequired: false,
      main: false,
      options: [
        {
          id: 'deac7968-6eb8-41f8-be43-de1c6b141c77',
          title: 'picante',
          price: 0,
          discount: 0,
          quantity: 1
        },
        {
          id: '7124cc4a-7c06-47b4-b762-6ac1cd5b1a4c',
          title: 'normal',
          price: 0,
          discount: 0,
          quantity: 1
        }
      ]
    },
    {
      id: '7124cc4a-7c06-47b4-b762-6ac1cd5b1a4c',
      productId: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      title: 'extras',
      quantity: 1,
      type: 'multiple',
      isRequired: false,
      main: false,
      options: [
        {
          id: '1',
          title: 'chashu extra',
          price: 8.90,
          discount: 0,
          quantity: 1
        },
        {
          id: '2',
          title: 'ovo extra',
          price: 4.90,
          discount: 0,
          quantity: 1
        }
      ]
    }
  ]
}


export const checkoutData: CheckoutProps[] = [
  {
    id: '54a5068d-3e8f-4ee3-98f7-bd24bf34598d',
    restaurantId: 'e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b',
    products: [guioza, temaki, sushiCombo, ramen],
  },
];


const matsuri: RestaurantProps = {
  id: "e3f4a5b6-c7d8-6e7f-0a9b-1c2d3e4f5a6b",
  name: "Matsuri Concept",
  logoUrl: "/assets/images/logo-loja-01.png",
  rating: 4.8,
  deliveryFee: 0,
  deliveryTime: "hoje, 30-40 min",
  distance: 2.5,
  freeDeliveryMinOrder: 35.00,
  closingTime: "23:00",
  isFavorite: true,
  hasFreeDelivery: true,
  minOrderValue: 15.00,
  status: "open",
  slug: "matsuri-concept",
  cuisineType: "Japonesa",
  menus: [
    {
      id: "0b1c6679-7425-40de-944b-e07fc1f90b04",
      name: "Entradas",
      description: "Pratos para começar",
      products: [
        guioza,
      ]
    },
    {
      id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
      name: "Temakis",
      description: "Cones de alga nori recheados",
      products: [
        temaki,
      ]
    },
    {
      id: "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
      name: "Sushis",
      description: "Combos e peças avulsas",
      products: [
        sushiCombo,
      ]
    },
    {
      id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
      name: "Massas",
      description: "Ramen e Yakisoba",
      products: [
        ramen,
      ]
    }
  ]
};

const subway: RestaurantProps = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Subway",
  logoUrl: "/assets/images/logo-loja-02.png",
  rating: 4.5,
  deliveryFee: 3.99,
  deliveryTime: "hoje, 25-35 min",
  distance: 1.8,
  freeDeliveryMinOrder: 30.00,
  closingTime: "22:00",
  isFavorite: false,
  hasFreeDelivery: false,
  minOrderValue: 20.00,
  status: "closed",
  slug: "subway",
  cuisineType: "Fast Food",
  menus: [
    {
      id: "1c2d6679-7425-40de-944b-e07fc1f90b05",
      name: "Sanduíches",
      description: "Sanduíches frescos e personalizados",
      products: [
        {
          id: "2d3e6679-7425-40de-944b-e07fc1f90b06",
          restaurantId: "550e8400-e29b-41d4-a716-446655440000",
          name: "Subway Club",
          description: "Frango grelhado, peru e presunto com queijo",
          price: 24.90,
          discount: 0,
          isVegetarian: false,
          quantity: 1,
          isSpicy: false,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          observation: null,
          additionals: [
            {
              id: "3e4f6679-7425-40de-944b-e07fc1f90b07",
              productId: "550e8400-e29b-41d4-a716-446655440000",
              title: "Pão",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "4f5a6679-7425-40de-944b-e07fc1f90b08",
                  title: "Italiano",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "5a6b6679-7425-40de-944b-e07fc1f90b09",
                  title: "Parmesão e Orégano",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "6b7c6679-7425-40de-944b-e07fc1f90b0a",
                  title: "9 Grãos",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const mcdonalds: RestaurantProps = {
  id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  name: "McDonald's",
  logoUrl: "/assets/images/logo-loja-04.png",
  rating: 4.3,
  deliveryFee: 5.99,
  deliveryTime: "hoje, 20-30 min",
  distance: 2.1,
  freeDeliveryMinOrder: 40.00,
  closingTime: "23:00",
  isFavorite: true,
  hasFreeDelivery: false,
  minOrderValue: 15.00,
  status: "closed",
  slug: "mcdonalds",
  cuisineType: "Fast Food",
  menus: [
    {
      id: "7c8d6679-7425-40de-944b-e07fc1f90b0b",
      name: "Combos",
      description: "Combos com batata e refrigerante",
      products: [
        {
          id: "8d9e6679-7425-40de-944b-e07fc1f90b0c",
          restaurantId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
          name: "Big Mac",
          description: "Dois hambúrgueres, alface, queijo, molho especial, cebola, picles, pão com gergelim",
          price: 32.90,
          discount: 0,
          isVegetarian: false,
          isSpicy: false,
          observation: null,
          quantity: 1,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "9e0f6679-7425-40de-944b-e07fc1f90b0d",
              productId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
              title: "Bebida",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "0f1a6679-7425-40de-944b-e07fc1f90b0e",
                  title: "Coca-Cola",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "1a2b6679-7425-40de-944b-e07fc1f90b0f",
                  title: "Fanta Laranja",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "2b3c6679-7425-40de-944b-e07fc1f90b10",
                  title: "Sprite",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const burgerKing: RestaurantProps = {
  id: "8d9e6679-7425-40de-944b-e07fc1f90ae8",
  name: "Burger King",
  logoUrl: "/assets/images/logo-loja-03.png",
  rating: 4.4,
  deliveryFee: 4.99,
  deliveryTime: "hoje, 25-35 min",
  distance: 2.3,
  freeDeliveryMinOrder: 35.00,
  closingTime: "23:00",
  isFavorite: false,
  hasFreeDelivery: false,
  minOrderValue: 20.00,
  status: "open",
  slug: "burger-king",
  cuisineType: "Fast Food",
  menus: [
    {
      id: "3c4d6679-7425-40de-944b-e07fc1f90b11",
      name: "Combos",
      description: "Combos com batata e refrigerante",
      products: [
        {
          id: "4d5e6679-7425-40de-944b-e07fc1f90b12",
          restaurantId: "8d9e6679-7425-40de-944b-e07fc1f90ae8",
          name: "Whopper",
          description: "Hambúrguer de carne bovina, alface, tomate, maionese, picles, cebola e pão com gergelim",
          price: 29.90,
          discount: 0,
          isVegetarian: false,
          quantity: 1,
          observation: null,
          isSpicy: false,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "5e6f6679-7425-40de-944b-e07fc1f90b13",
              productId: "8d9e6679-7425-40de-944b-e07fc1f90ae8",
              title: "Bebida",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "6f7a6679-7425-40de-944b-e07fc1f90b14",
                  title: "Coca-Cola",
                  price: 5,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "7a8b6679-7425-40de-944b-e07fc1f90b15",
                  title: "Fanta Laranja",
                  price: 5,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "8b9c6679-7425-40de-944b-e07fc1f90b16",
                  title: "Sprite",
                  price: 5,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const girafas: RestaurantProps = {
  id: "9e0f6679-7425-40de-944b-e07fc1f90ae9",
  name: "Giraffas",
  logoUrl: "/assets/images/logo-loja-08.png",
  rating: 4.2,
  deliveryFee: 3.99,
  deliveryTime: "hoje, 30-40 min",
  distance: 2.8,
  freeDeliveryMinOrder: 30.00,
  closingTime: "22:00",
  isFavorite: false,
  hasFreeDelivery: false,
  minOrderValue: 15.00,
  status: "open",
  slug: "girafas",
  cuisineType: "Brasileira",
  menus: [
    {
      id: "9c0d6679-7425-40de-944b-e07fc1f90b17",
      name: "Pratos",
      description: "Pratos executivos e combos",
      products: [
        {
          id: "0d1e6679-7425-40de-944b-e07fc1f90b18",
          restaurantId: "9e0f6679-7425-40de-944b-e07fc1f90ae9",
          name: "Filé à Parmegiana",
          description: "Filé à parmegiana com arroz, feijão e fritas",
          price: 35.90,
          discount: 0,
          isVegetarian: false,
          isSpicy: false,
          observation: null,
          quantity: 1,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "1e2f6679-7425-40de-944b-e07fc1f90b19",
              productId: "9e0f6679-7425-40de-944b-e07fc1f90ae9",
              title: "Bebida",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "2f3a6679-7425-40de-944b-e07fc1f90b1a",
                  title: "Coca-Cola",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "3a4b6679-7425-40de-944b-e07fc1f90b1b",
                  title: "Suco de Laranja",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "4b5c6679-7425-40de-944b-e07fc1f90b1c",
                  title: "Água",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const outback: RestaurantProps = {
  id: "0f1a6679-7425-40de-944b-e07fc1f90af0",
  name: "Outback",
  logoUrl: "/assets/images/logo-loja-07.png",
  rating: 4.7,
  deliveryFee: 8.99,
  deliveryTime: "hoje, 40-50 min",
  distance: 3.2,
  freeDeliveryMinOrder: 80.00,
  closingTime: "23:00",
  isFavorite: true,
  hasFreeDelivery: false,
  minOrderValue: 50.00,
  status: "open",
  slug: "outback",
  cuisineType: "Australiana",
  menus: [
    {
      id: "5c6d6679-7425-40de-944b-e07fc1f90b1d",
      name: "Carnes",
      description: "Carnes grelhadas e assadas",
      products: [
        {
          id: "6d7e6679-7425-40de-944b-e07fc1f90b1e",
          restaurantId: "0f1a6679-7425-40de-944b-e07fc1f90af0",
          name: "Ribs on the Barbie",
          description: "Costela suína grelhada com molho barbecue",
          price: 89.90,
          discount: 0,
          isVegetarian: false,
          isSpicy: false,
          observation: null,
          quantity: 1,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "7e8f6679-7425-40de-944b-e07fc1f90b1f",
              productId: "0f1a6679-7425-40de-944b-e07fc1f90af0",
              title: "Acompanhamentos",
              quantity: 2,
              type: "multiple",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "8f9a6679-7425-40de-944b-e07fc1f90b20",
                  title: "Batata",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "9a0b6679-7425-40de-944b-e07fc1f90b21",
                  title: "Arroz",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "0b1c6679-7425-40de-944b-e07fc1f90b22",
                  title: "Salada",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const habibs: RestaurantProps = {
  id: "1a2b6679-7425-40de-944b-e07fc1f90af1",
  name: "Habib's",
  logoUrl: "/assets/images/logo-loja-09.png",
  rating: 4.1,
  deliveryFee: 3.99,
  deliveryTime: "hoje, 25-35 min",
  distance: 2.0,
  freeDeliveryMinOrder: 25.00,
  closingTime: "23:00",
  isFavorite: false,
  hasFreeDelivery: false,
  minOrderValue: 15.00,
  status: "closed",
  slug: "habibs",
  cuisineType: "Árabe",
  menus: [
    {
      id: "1c2d6679-7425-40de-944b-e07fc1f90b23",
      name: "Esfihas",
      description: "Esfihas abertas e fechadas",
      products: [
        {
          id: "2d3e6679-7425-40de-944b-e07fc1f90b24",
          restaurantId: "1a2b6679-7425-40de-944b-e07fc1f90af1",
          name: "Combo 6 Esfihas",
          observation: null,
          description: "6 esfihas de carne, frango ou mistas",
          price: 24.90,
          discount: 0,
          isVegetarian: false,
          isSpicy: false,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          quantity: 1,
          additionals: [
            {
              id: "3e4f6679-7425-40de-944b-e07fc1f90b25",
              productId: "0f1a6679-7425-40de-944b-e07fc1f90af0",
              title: "Bebida",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "4f5a6679-7425-40de-944b-e07fc1f90b26",
                  title: "Suco de Laranja",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "5a6b6679-7425-40de-944b-e07fc1f90b27",
                  title: "Refrigerante",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const chinaBox: RestaurantProps = {
  id: "2b3c6679-7425-40de-944b-e07fc1f90af2",
  name: "China Box",
  logoUrl: "/assets/images/logo-loja-06.png",
  rating: 4.3,
  deliveryFee: 3.99,
  deliveryTime: "hoje, 30-40 min",
  distance: 2.5,
  freeDeliveryMinOrder: 30.00,
  closingTime: "22:00",
  isFavorite: false,
  slug: "china-box",
  hasFreeDelivery: false,
  minOrderValue: 20.00,
  status: "open",
  cuisineType: "Chinesa",
  
  menus: [
    {
      id: "6b7c6679-7425-40de-944b-e07fc1f90b28",
      name: "Combos",
      description: "Combos com arroz e bebida",
      products: [
        {
          id: "7c8d6679-7425-40de-944b-e07fc1f90b29",
          restaurantId: "2b3c6679-7425-40de-944b-e07fc1f90af2",
          name: "Combo Frango Xadrez",
          description: "Frango xadrez com arroz e bebida",
          price: 29.90,
          discount: 0,
          observation: null,
          isVegetarian: false,
          isSpicy: false,
          quantity: 1,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "8d9e6679-7425-40de-944b-e07fc1f90b2a",
              productId: "0f1a6679-7425-40de-944b-e07fc1f90af0",
              title: "Bebida",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "9e0f6679-7425-40de-944b-e07fc1f90b2b",
                  title: "Refrigerante",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "0f1a6679-7425-40de-944b-e07fc1f90b2c",
                  title: "Suco",
                  price: 0,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const pizzaHut: RestaurantProps = {
  id: "3c4d6679-7425-40de-944b-e07fc1f90af3",
  name: "Pizza Hut",
  logoUrl: "/assets/images/logo-loja-05.png",
  rating: 4.6,
  deliveryFee: 5.99,
  deliveryTime: "hoje, 35-45 min",
  distance: 2.7,
  freeDeliveryMinOrder: 50.00,
  closingTime: "23:00",
  slug: "pizza-hut",
  isFavorite: true,
  hasFreeDelivery: false,
  minOrderValue: 30.00,
  status: "open",
  cuisineType: "Italiana",
  menus: [
    {
      id: "1a2b6679-7425-40de-944b-e07fc1f90b2d",
      name: "Pizzas",
      description: "Pizzas tradicionais e especiais",
      products: [
        {
          id: "2b3c6679-7425-40de-944b-e07fc1f90b2e",
          restaurantId: "3c4d6679-7425-40de-944b-e07fc1f90af3",
          name: "Pizza Suprema",
          description: "Molho de tomate, mussarela, pepperoni, cebola, pimentão verde, champignon e azeitonas",
          price: 69.90,
          discount: 0,
          observation: null,
          isVegetarian: false,
          isSpicy: false,
          quantity: 1,
          imageUrl: '/assets/images/loja/item/main-image.jpg',
          additionals: [
            {
              id: "3c4d6679-7425-40de-944b-e07fc1f90b2f",
              productId: "0f1a6679-7425-40de-944b-e07fc1f90af0",
              title: "Tamanho",
              quantity: 1,
              type: "unique",
              isRequired: true,
              main: false,
              options: [
                {
                  id: "4d5e6679-7425-40de-944b-e07fc1f90b30",
                  title: "Média",
                  price: 0,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "5e6f6679-7425-40de-944b-e07fc1f90b31",
                  title: "Grande",
                  price: 15.00,
                  discount: 0,
                  quantity: 1
                },
                {
                  id: "6f7a6679-7425-40de-944b-e07fc1f90b32",
                  title: "Família",
                  price: 25.00,
                  discount: 0,
                  quantity: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const restaurants: RestaurantProps[] = [
  matsuri,
  subway,
  mcdonalds,
  burgerKing,
  girafas,
  outback,
  habibs,
  chinaBox,
  pizzaHut
]; 












