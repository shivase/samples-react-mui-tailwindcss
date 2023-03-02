import { FC } from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

export type Course = {
  text: string;
  id: string;
};

type CourseGoalListProps = {
  items: Course[];
  onDeleteItem: (goalId: string) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = (props) => {
  const { items, onDeleteItem } = props;

  return (
    <ul className="m-0 list-none p-0">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
