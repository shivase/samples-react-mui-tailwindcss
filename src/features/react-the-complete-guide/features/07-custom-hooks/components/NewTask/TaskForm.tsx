import { FC, useRef } from 'react';

type TaskFormProps = {
  onEnterTask: (task: string) => void;
  loading: boolean;
};

const TaskForm: FC<TaskFormProps> = (props) => {
  const { onEnterTask, loading } = props;
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskInputRef.current) {
      const enteredValue = taskInputRef.current.value;

      if (enteredValue.trim().length > 0) {
        onEnterTask(enteredValue);
      }
    }
  };

  return (
    <form className="flex justify-between" onSubmit={(e) => submitHandler(e)}>
      <input
        className="mr-8 flex-1 border-b-2 border-b-[#ccc] p-1 focus:border-[#7a0144] focus:outline-none"
        type="text"
        ref={taskInputRef}
      />
      <button type="submit">{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
