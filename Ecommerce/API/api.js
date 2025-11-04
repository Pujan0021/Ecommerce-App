const link = "https://fakestoreapi.com/products";
export const fetchApi = async () => {

    try {
        const response = await fetch(link);
        const responseJSON = await response.json();
        return responseJSON;

    } catch (error) {
        console.log("API Fetch Error", error);
        return [];
    }
}