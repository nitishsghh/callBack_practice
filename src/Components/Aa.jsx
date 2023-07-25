import React from 'react';
import MyContext from './context';
import ComponentA from './ComponentA';

const App = () => {
  const contextValue = {
    // Put any data or functions you want to share here
    data: 'Hello from context!',
    // ...
  };

  return (
    <MyContext.Provider value={contextValue}>
      <ComponentA />
      {/* Other components that need access to the context */}
    </MyContext.Provider>
  );
};

export default App;
