/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactNode } from 'react';

type CourseGoalItemProps = {
  id: string;
  onDelete: (id: string) => void;
  children: ReactNode;
};

const CourseGoalItem: FC<CourseGoalItemProps> = (props) => {
  const { id, onDelete, children } = props;
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li
      className="my-4 mx-0 cursor-pointer bg-[#8b005d] py-4 px-8 text-white shadow-[0_2px_8px_rgba(0,0,0,0.26)]"
      onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
