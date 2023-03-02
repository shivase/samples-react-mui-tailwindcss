export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type FetchMeal = {
  [id: string]: {
    name: string;
    description: string;
    price: number;
  };
};

export type User = {
  name: string;
  city: string;
  postalCode: string;
  street: string;
};
