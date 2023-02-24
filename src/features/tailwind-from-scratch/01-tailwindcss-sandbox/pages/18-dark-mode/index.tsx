/* eslint-disable jsx-a11y/label-has-associated-control */
export const DarkMode = () => {
  return (
    <>
      {/* By default, you can have your project use whatever mode your OS is using. You can use "dark:{class}". You can also set your config to use a class instead of using your OS mode */}
      <div className="container mx-auto mt-10 rounded-xl bg-white px-6 py-8 shadow-xl dark:bg-slate-900">
        <h3 className="font-medium tracking-tight text-slate-900 dark:text-white">
          Commodo est exercitation eiusmod aliqua do.
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Tempor commodo enim non ut nostrud ex est qui anim et laborum in. Incididunt eiusmod
          consequat occaecat nostrud dolor pariatur. Occaecat cillum excepteur est et non. Deserunt
          tempor ad veniam aute reprehenderit commodo qui aliqua nisi anim irure.
        </p>
      </div>
    </>
  );
};

//<!-- Credit for toggle button style
//https://tailwindcomponents.com/component/toggle-switch
// -->
