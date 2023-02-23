import warning_svg from '../../assets/img/warning.svg';

export const UtilityFirst = () => {
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <img src={warning_svg} alt="" className="h-12 w-12" />
        <div>
          <div className="text-xl font-medium text-black">Are you sure?</div>
          <p className="text-slate-500">Your are about to delete a post</p>
        </div>
      </div>
    </>
  );
};
