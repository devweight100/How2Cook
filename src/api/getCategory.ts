const getCategory = async (cat:string) => {
    const response = await fetch(
      `www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
    );
    const data = await response.json();

    return data
}

export default getCategory;