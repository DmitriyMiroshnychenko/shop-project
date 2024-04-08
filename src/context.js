import { Children, createContext } from 'react';

export const ShopContext = createContext();

export const ContextProvider = ({ Children }) => {
  const value = {
    example: 'hello from context',
  };

  return <ShopContext.Provider value={value}>{Children}</ShopContext.Provider>;
};
