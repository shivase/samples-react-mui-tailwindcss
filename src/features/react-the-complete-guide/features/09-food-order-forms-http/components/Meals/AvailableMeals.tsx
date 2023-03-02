import { useMeals } from '../../hooks/useMeals';
import type { Meal } from '../../types';
import Card from '../UI/Card';

import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const getMealsQuery = useMeals();

  let message;
  const meals: Meal[] = [];
  if (getMealsQuery.isLoading) {
    message = <p>Meal Loading...</p>;
  }

  if (getMealsQuery.data) {
    for (const key in getMealsQuery.data) {
      meals.push({
        id: key,
        name: getMealsQuery.data[key].name,
        description: getMealsQuery.data[key].description,
        price: getMealsQuery.data[key].price,
      });
    }
  }

  return (
    <section className="my-8 mx-auto w-[90%] max-w-4xl animate-meals-appear">
      <Card>
        {message}
        <ul className="m-0 list-none p-0">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
