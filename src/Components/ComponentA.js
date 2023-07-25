// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './context';

const ComponentA = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <p>{context.data}</p>
      {/* Use the context data in your component */}
    </div>
  );
};

export default ComponentA;
