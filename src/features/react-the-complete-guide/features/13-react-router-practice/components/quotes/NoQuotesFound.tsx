import { LinkButton } from '../Elements/LinkButton';

export const NoQuotesFound = () => {
  return (
    <div className="m-auto flex h-[20rem] flex-col items-center justify-center">
      <p className="mb-[40px] text-5xl font-bold text-[#262c2c]">No quotes found!</p>
      <LinkButton to="../new-quote">Add a Quote</LinkButton>
    </div>
  );
};
