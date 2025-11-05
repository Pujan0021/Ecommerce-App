const link = "https://api.themoviedb.org/3/movie/popular?api_key=";
const apiKey = "810c97f1e7e9ab7a558b3fac22d6718e";
const api = link + apiKey;
export const fthApi = async () => {
    try {
        let data = await fetch(api);
        let response = await data.json();
        console.log(response);
        return response.results;

    } catch (error) {
        console.log("Error occured Fetching an API");
        return [];
    }
}