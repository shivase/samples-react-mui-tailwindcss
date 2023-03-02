import BasicForm from '../components/BasicForm';
import SimpleInput from '../components/SimpleInput';

export const Forms = () => {
  return (
    <>
      <div className="my-12 mx-auto w-[90%] max-w-2xl rounded-xl bg-gray-300 p-4">
        <SimpleInput />
      </div>
      <div className="my-12 mx-auto w-[90%] max-w-2xl rounded-xl bg-gray-300 p-4">
        <BasicForm />
      </div>
      ;
    </>
  );
};
