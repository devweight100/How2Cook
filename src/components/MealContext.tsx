import { createContext, useState } from "react";

interface MealContextType {
  likeIds: string[];
  setLikeIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const MealContext = createContext<MealContextType>({
  likeIds: [],
  setLikeIds: () => {},
});

import { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [likeIds, setLikeIds] = useState<string[]>([]);

  return (
    <MealContext.Provider value={{ likeIds, setLikeIds }}>
      {children}
    </MealContext.Provider>
  );
}

export default MealContext;
export { Provider };
