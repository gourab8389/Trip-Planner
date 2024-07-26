export const MaxWrapper = ({ children , className}) => {
    return (
      <div className="w-full px-5 md:px-10 2xl:px-64 flex flex-col space-y-4 mt-20 items-center overflow-x-hidden">
        {children}
      </div>
    );
  };