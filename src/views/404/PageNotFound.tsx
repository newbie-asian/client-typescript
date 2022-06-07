import React, { FC } from 'react';

const PageNotFound: FC = () => {
  return (
    <div className="text-red-500 m-7 font-bold">
      <h1 className=" text-5xl">404 Error</h1>
      <h1 className="text-3xl text-red-500">Page not found :(</h1>
    </div>
  );
};

export default PageNotFound;
