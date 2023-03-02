import { FC } from 'react';

type SectionProps = {
  children: React.ReactNode;
};

const Section: FC<SectionProps> = (props) => {
  const { children } = props;

  return (
    <section className="my-8 mx-auto max-w-[40rem] rounded-xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      {children}
    </section>
  );
};

export default Section;
