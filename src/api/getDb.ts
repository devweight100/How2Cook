import { MealType } from "./type/MealType";

const URL = "http://localhost:3001/likeIds";

export default async function getDb() {
    const res = await fetch(URL);
    const data = await res.json()
 
    return data as MealType[]
}
export async function postData({idMeal,strMeal,strMealThumb}:MealType) {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       idMeal,
        strMeal,
        strMealThumb
      }),
    });
  // console.log(await response.json())
  return response.json()
}

export async function deleteData(id:string) {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(`Deleted ${id} ${await response.json()}`)
    return response.json();
}