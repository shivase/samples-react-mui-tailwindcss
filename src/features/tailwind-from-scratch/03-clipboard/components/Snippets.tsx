import { Header } from './Header/Header';

export const Snippets = () => {
  return (
    <section id="snippets">
      <div className="mx-auto my-20 max-w-6xl px-10 text-center">
        <Header type="h3">Keep track of your snippets</Header>
        <p className="mx-auto mb-24 max-w-3xl text-center text-xl leading-9 text-grayishBlue">
          Clipboard instantly stores any item you copy in the cloud, meaning you can access your
          snippets immediately on all your devices. Our mac and iOS apps will help you organize
          everything.
        </p>
      </div>
    </section>
  );
};
