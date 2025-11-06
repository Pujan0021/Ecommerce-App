const link = "https://dummyjson.com/products";
export const apiData = async () => {
    try {

        const data = await fetch(link);
        const response = await data.json();
        return response.products;
    } catch (err) {
        console.log('Api fetch Error', err)
        return [];
    }
}