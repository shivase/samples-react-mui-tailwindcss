import { useEffect, useState } from 'react';

import { API_URL } from '@/config';

import BackwardCounter from '../components/BackwardCounter';
import ForwardCounter from '../components/ForwardCounter';
import NewTask from '../components/NewTask/NewTask';
import Tasks from '../components/Tasks/Tasks';
import { useHttp } from '../hooks/useHttps';
import { FetchTask, Task } from '../types';

export const CustomHooks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (data: FetchTask) => {
      const loadedTasks: Task[] = [];

      for (const key in data) {
        loadedTasks.push({ id: key, text: data[key].text });
      }
      setTasks(loadedTasks);
    };

    void fetchTasks<FetchTask>(API_URL + '/tasks.json', {}, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <div className="font-NotoSansJP">
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={() => {
          void fetchTasks;
        }}
      />
      <ForwardCounter />
      <BackwardCounter />
    </div>
  );
};
