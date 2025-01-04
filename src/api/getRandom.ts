interface id{
    idMeal: string;
}

export async function getRandom() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    const { idMeal } = data.meals[0];

    return { idMeal } as id;
}