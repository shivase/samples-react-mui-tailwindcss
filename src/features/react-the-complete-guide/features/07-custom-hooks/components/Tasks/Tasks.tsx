import { FC } from 'react';

import Section from '../UI/Section';

import TaskItem from './TaskItem';

type TasksProps = {
  items: {
    id: string;
    text: string;
  }[];
  error: string;
  loading: boolean;
  onFetch: () => void;
};

const Tasks: FC<TasksProps> = (props) => {
  const { items, error, loading, onFetch } = props;
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul className="m-0 list-none p-0 text-left">
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (error) {
    content = (
      <button type="button" onClick={onFetch}>
        Try again
      </button>
    );
  }

  if (loading) {
    content = <p>Loading tasks...</p>;
  }

  return (
    <Section>
      <div className="text-center">{content}</div>
    </Section>
  );
};

export default Tasks;
