const BASE_URL = 'https://akabab.github.io/starwars-api/api/all.json';

export const getDataFromStarWars = async()=> {
    try {
        const response = await fetch(BASE_URL);
        const data = response.json();
        return data;
        console.log(data);
    } catch(error){
        console.log(error.message);
    }
}