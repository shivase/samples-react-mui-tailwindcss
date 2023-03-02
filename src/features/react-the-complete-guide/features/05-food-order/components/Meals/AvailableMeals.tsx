import Card from '../UI/Card';

import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => (
  <section className="my-8 mx-auto w-[90%] max-w-4xl animate-meals-appear">
    <Card>
      <ul className="m-0 list-none p-0">
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </Card>
  </section>
);

export default AvailableMeals;
