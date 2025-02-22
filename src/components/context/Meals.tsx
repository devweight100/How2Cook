import { MealType } from "@/api/type/MealType";
import React, { createContext,  useEffect,  useState } from "react";
import { ReactNode } from "react";

export interface MealContextType {
  likeIds: MealType[];
  setLikeIds: React.Dispatch<React.SetStateAction<MealType[]>>;
  data: MealType[];
  setData: React.Dispatch<React.SetStateAction<MealType[]>>;
 
}

interface ProviderProps {
    children: ReactNode;
}

const MealContext = createContext<MealContextType>({
  likeIds: [],
  setLikeIds: () => { },
  data: [],
  setData: () => { }
 
});

function Provider({ children }: ProviderProps) {
  const [likeIds, setLikeIds] = useState<MealType[]>([]);
  const [data, setData] = useState<MealType[]>([]);
  
  const fetchLike = async () => {
    const favList = window.localStorage.getItem("favList")
    const fav = favList ? JSON.parse(favList) : []; 
    setLikeIds(fav)
  }
  useEffect(() => {
    fetchLike();
    // console.log(likeIds)
  },[likeIds.length])
 

  return (
    <MealContext.Provider value={{ likeIds, setLikeIds,data,setData }}>
      {children}
    </MealContext.Provider>
  );
}



export default MealContext;
export { Provider };
