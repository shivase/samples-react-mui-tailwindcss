import { FC } from 'react';

import { API_URL } from '@/config';

import TaskForm from '../../components/NewTask/TaskForm';
import Section from '../../components/UI/Section';
import { useHttp } from '../../hooks/useHttps';
import { Task } from '../../types';

type NewTaskProps = {
  onAddTask: (task: Task) => void;
};

const NewTask: FC<NewTaskProps> = (props) => {
  const { onAddTask } = props;
  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = async (taskText: string) => {
    const createTask = (val: { name: string }) => {
      const createdTask = { id: val.name, text: taskText };
      onAddTask(createdTask);
    };

    sendRequest<{ name: string }>(
      API_URL + '/tasks.json',
      {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask,
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={(task) => {
          void enterTaskHandler(task);
        }}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
