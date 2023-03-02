import { FC } from 'react';

type TaskItemProps = {
  children: React.ReactNode;
};

const TaskItem: FC<TaskItemProps> = (props) => {
  const { children } = props;

  return (
    <li className="border-b-[1px] border-solid border-[#ccc] p-4 text-xl font-bold last-of-type:border-b-0">
      {children}
    </li>
  );
};

export default TaskItem;
